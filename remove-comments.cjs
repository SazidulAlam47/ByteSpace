const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Remove JSX comments {/* ... */}
  content = content.replace(/^[ \t]*\{\s*\/\*[\s\S]*?\*\/\s*\}[ \t]*\r?\n/gm, ''); // entire line
  content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, ''); // inline
  
  // 2. Remove standard multi-line comments /* ... */
  // eslint-disable-next-line etc we might want to keep? Let's just remove all except eslint if possible, 
  // actually user said "remove all comments".
  content = content.replace(/^[ \t]*\/\*[\s\S]*?\*\/[ \t]*\r?\n/gm, ''); // entire line
  content = content.replace(/\/\*[\s\S]*?\*\//g, ''); // inline
  
  // 3. Remove single-line comments // ... (not preceded by :)
  content = content.replace(/^[ \t]*(?<!:)\/\/.*\r?\n/gm, ''); // entire line
  content = content.replace(/(?<!:)\/\/.*$/gm, ''); // inline

  // 4. Remove empty lines that might have been left over
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync(file, content);
});

console.log('Comments removed from', files.length, 'files.');
