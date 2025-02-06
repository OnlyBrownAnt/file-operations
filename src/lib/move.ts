import { promises as fs } from 'fs';
import { logError } from '../error.js';


export async function moveFiles(source: string, destination: string) {
  try {
    await fs.rename(source, destination);
    console.log(`Moved: ${source} -> ${destination}`);
  } catch (error) {
    logError('moveFiles', error);
  }
}
