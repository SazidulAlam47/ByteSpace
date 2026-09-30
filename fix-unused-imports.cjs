const fs = require('fs');

const lintOutput = fs.readFileSync('lint_output.txt', 'utf8');
const lines = lintOutput.split('\n');

const unusedImports = {};

let currentFile = '';

for (const line of lines) {
  // Catch paths like D:\...
  if (line.match(/^[a-zA-Z]:\\/)) {
    currentFile = line.trim();
  } else if (line.includes('is defined but never used')) {
    const match = line.match(/'([^']+)' is defined but never used/);
    if (match) {
      if (!unusedImports[currentFile]) {
        unusedImports[currentFile] = [];
      }
      unusedImports[currentFile].push(match[1]);
    }
  }
}

for (const [file, unusedList] of Object.entries(unusedImports)) {
  let content = fs.readFileSync(file, 'utf8');
  
  for (const identifier of unusedList) {
    // 1. Default import alone: `import Header from "..."`
    const defaultRegex = new RegExp(`import\\s+${identifier}\\s+from\\s+['"][^'"]+['"];?[\\r\\n]*`, 'g');
    content = content.replace(defaultRegex, '');
  }

  // 2. Modify named imports
  content = content.replace(/^import\s+\{([\s\S]*?)\}\s+from\s+['"]([^'"]+)['"];?/gm, (match, namedList, source) => {
    let names = namedList.split(',').map(s => s.trim()).filter(Boolean);
    names = names.filter(n => !unusedList.includes(n));
    if (names.length === 0) return '';
    return `import { ${names.join(', ')} } from '${source}';`;
  });

  // Clean up any double blank lines at top
  content = content.replace(/^(?:[\t ]*(?:\r?\n)){2,}/, '\n');

  fs.writeFileSync(file, content);
}

console.log('Unused imports removed.');
