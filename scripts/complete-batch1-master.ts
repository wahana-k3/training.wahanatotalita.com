import { ProgramDetail } from './master-batch1-data';
import { batch1DeepData } from './deep-batch1-data';
import { heavyList } from './build-heavy-deep';
import { finalPrograms } from './build-final-9-deep';

export const allBatch1Programs: ProgramDetail[] = [
  ...batch1DeepData,
  ...heavyList,
  ...finalPrograms,
];

console.log(`Loaded TOTAL ${allBatch1Programs.length} programs for Batch 1.`);
