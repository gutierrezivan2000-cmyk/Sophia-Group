import { execSync } from 'child_process';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const projectRoot = '/vercel/share/v0-project';
const zipPath = join(projectRoot, 'SohpiaGroup.zip');

// Extract the ZIP
console.log('[v0] Extracting ZIP file...');
execSync(`unzip -o "${zipPath}" -d "${projectRoot}/extracted_temp"`, { stdio: 'inherit' });

// List what was extracted
console.log('[v0] Extracted contents:');
function listDir(dir, depth = 0) {
  try {
    const items = readdirSync(dir);
    for (const item of items) {
      const fullPath = join(dir, item);
      const stat = statSync(fullPath);
      console.log('  '.repeat(depth) + (stat.isDirectory() ? `[DIR] ${item}` : item));
      if (stat.isDirectory() && depth < 3) {
        listDir(fullPath, depth + 1);
      }
    }
  } catch (e) {
    console.log('[v0] Error listing:', e.message);
  }
}

listDir(join(projectRoot, 'extracted_temp'));
