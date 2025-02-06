import * as path from 'path';
import { promises as fs } from 'fs';
import { traverseDirectory } from './utils.js';
import { logError } from '../error.js';

export async function renameFiles(directory: string, pattern: any, newName: string) {
  try {
    traverseDirectory(directory, async (itemPath: string, item: any) => {
      const baseName = path.basename(itemPath);
      const newBaseName = baseName.replace(pattern, newName);
      if (baseName != newBaseName) {
        const newFilePath = path.join(path.dirname(itemPath), newBaseName);
        await fs.rename(itemPath, newFilePath);
        console.log(`renameFiles: ${itemPath} => ${newFilePath}`)
      }
    })
  } catch (error) {
    logError('renameFiles', error);
  }
}
