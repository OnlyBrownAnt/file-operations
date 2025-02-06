import { promises as fs } from 'fs';
import { logError } from '../error.js';


export async function copyFiles(source: string, destination: string) {
  try {
    await fs.cp(source, destination, { recursive: true });
    console.log(`Copied: ${source} -> ${destination}`);
  } catch (error) {
    logError('copyFiles', error);
  }
}
