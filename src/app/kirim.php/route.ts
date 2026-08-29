import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Read form data
  try {
    const formData = await req.formData();
    const honeypot = formData.get('website');
    if (honeypot) {
      return NextResponse.redirect(new URL('/terima-kasih/', req.url), 303);
    }
    // Form processing logic here if smtp is configured
    return NextResponse.redirect(new URL('/terima-kasih/', req.url), 303);
  } catch {
    return NextResponse.redirect(new URL('/terima-kasih/', req.url), 303);
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.redirect(new URL('/kontak/', req.url), 301);
}
