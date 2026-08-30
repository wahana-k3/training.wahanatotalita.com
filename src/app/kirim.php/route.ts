import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // 1. Honeypot check for spam bots
    const honeypot = formData.get('website')?.toString().trim();
    if (honeypot) {
      console.warn('[Spam Detected] Honeypot field filled. Silently ignoring submission.');
      return NextResponse.redirect(new URL('/terima-kasih/', req.url), 303);
    }

    // 2. Extract submitted form fields
    const nama = formData.get('nama')?.toString().trim() || '-';
    const perusahaan = formData.get('perusahaan')?.toString().trim() || '-';
    const email = formData.get('email')?.toString().trim() || '-';
    const telepon = formData.get('telepon')?.toString().trim() || '-';
    const kebutuhan = formData.get('kebutuhan')?.toString().trim() || '-';
    const pesan = formData.get('pesan')?.toString().trim() || '-';
    const timestamp = new Date().toISOString();

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_TO_EMAIL || 'info@wahanatotalita.com';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Wahana Training Portal <onboarding@resend.dev>';

    if (!apiKey) {
      console.warn('[Lead Form Notice] RESEND_API_KEY is not configured in environment variables. Lead received:', {
        timestamp,
        nama,
        perusahaan,
        email,
        telepon,
        kebutuhan,
        pesan
      });
      return NextResponse.redirect(new URL('/terima-kasih/', req.url), 303);
    }

    // 3. HTML-escape fields for safe rendering
    const safeNama = escapeHtml(nama);
    const safePerusahaan = escapeHtml(perusahaan);
    const safeEmail = escapeHtml(email);
    const safeTelepon = escapeHtml(telepon);
    const safeKebutuhan = escapeHtml(kebutuhan);
    const safePesan = escapeHtml(pesan);

    // 4. Send email via Resend
    const resend = new Resend(apiKey);
    const subject = `[Lead Baru] ${nama} (${perusahaan !== '-' ? perusahaan : 'Perusahaan'}) - ${kebutuhan}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0284c7; color: #ffffff; padding: 18px 24px;">
          <h2 style="margin: 0; font-size: 20px;">📩 Permintaan Konsultasi Pelatihan Baru</h2>
          <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.9;">Diterima melalui formulir kontak training.wahanatotalita.com</p>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; width: 140px; font-weight: bold; color: #475569;">Nama:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeNama}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Perusahaan:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safePerusahaan}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${safeEmail}" style="color: #0284c7;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">No. Telepon/WA:</td>
              <td style="padding: 8px 0; color: #0f172a;">${safeTelepon}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Kebutuhan Utama:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${safeKebutuhan}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">Waktu Kirim:</td>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">${timestamp}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 16px; border-radius: 4px; margin-top: 16px;">
            <p style="margin: 0 0 8px; font-weight: bold; color: #334155;">Pesan / Keterangan Kebutuhan:</p>
            <p style="margin: 0; white-space: pre-wrap; color: #1e293b;">${safePesan}</p>
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px 24px; text-align: center; font-size: 12px; color: #64748b;">
          Sistem Notifikasi Lead Wahana Totalita &bull; training.wahanatotalita.com
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email !== '-' ? email : undefined,
      subject: subject,
      html: htmlContent,
      text: `Lead Baru:\nNama: ${nama}\nPerusahaan: ${perusahaan}\nEmail: ${email}\nTelepon: ${telepon}\nKebutuhan: ${kebutuhan}\n\nPesan:\n${pesan}\n\nWaktu: ${timestamp}`
    });

    if (error) {
      console.error('[Resend Error] Failed to dispatch contact form email:', error);
    } else {
      console.log('[Lead Form Success] Email sent successfully with ID:', data?.id);
    }

    return NextResponse.redirect(new URL('/terima-kasih/', req.url), 303);
  } catch (err) {
    console.error('[Lead Form Unexpected Error] Exception while processing form submission:', err);
    return NextResponse.redirect(new URL('/terima-kasih/', req.url), 303);
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.redirect(new URL('/kontak/', req.url), 301);
}
