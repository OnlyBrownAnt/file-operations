import * as path from 'path';
import { promises as fs } from 'fs';
import { traverseDirectory } from './utils.js';
import { logError } from '../error.js';

export async function deleteFiles(directory: string, pattern: any) {
  try {
    traverseDirectory(directory, async (itemPath: string, item: any) => {
      const basename = path.basename(itemPath);
      if (pattern.test(basename)) {
        if (item.isDirectory()) {
          await fs.rm(itemPath, { recursive: true })
          console.log(`Deleted: ${itemPath}`);
        } else {
          await fs.unlink(itemPath)
          console.log(`Deleted: ${itemPath}`);
        }
      }
    })
  } catch (error) {
    logError('deleteFiles', error);
  }
}
