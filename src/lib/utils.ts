import * as path from 'path';
import { promises as fs } from 'fs';
import { logError } from '../error.js';

export async function traverseDirectory(directory: string, callback: Function): Promise<void> {
  try {
    const items = await fs.readdir(directory, { withFileTypes: true })
    for (const item of items) {
      const itemPath = path.join(directory, item.name);
      if (item.isDirectory()) {
        await traverseDirectory(itemPath, callback);
        await callback(itemPath, item);
      } else {
        await callback(itemPath, item);
      }
    }
  } catch (error) {
    logError('traverseDirectory', error);
  }
}
