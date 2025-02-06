import { renameFiles } from "../dist/index.js";
(async () => {
  await renameFiles('./file', /old/, 'new')
})()
