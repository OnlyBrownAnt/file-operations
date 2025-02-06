# File System Operations

A Node.js package for batch processing of files and directories, supporting rename, delete, move, and copy operations with infinite nesting support.

## Features

- **Batch Renaming**: Rename files and directories in bulk using regular expressions or fixed rules.
- **Delete Files and Directories**: Remove specified files or directories.
- **Move and Copy**: Move and copy files and directories.
- **Infinite Nesting Support**: Recursively process directories with infinite nesting.
- **Error Handling**: Provides clear error messages to help quickly identify issues.

## Installation

```bash
npm install fs-operations --save-dev
```

## Usage

### Rename Files and Directories

```javascript
import { renameFiles } from "fs-operations";

(async () => {
  await renameFiles("./test", /old/, "new"); // Replace "old" with "new" in filenames and directory names
})();
```

### Delete Files and Directories

```javascript
import { deleteFiles } from "fs-operations");

(async () => {
  await deleteFiles("./test", /delete/); // Delete files and directories with names containing "delete"
})();
```

### Move Files and Directories

```javascript
import { moveFiles } from "fs-operations";

(async () => {
  await moveFiles("./test/source", "./test/destination"); // Move a directory
})();
```

### Copy Files and Directories

```javascript
import { copyFiles } from "fs-operations";

(async () => {
  await copyFiles("./test/source", "./test/copy"); // Copy a directory
})();
```
