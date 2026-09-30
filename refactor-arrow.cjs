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
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Regex to match "export default function Name(args) {"
  // This matches multiline arguments too (up to the closing ')')
  const regex = /export\s+default\s+function\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)\s*\{/g;
  
  let match;
  let componentsToExport = [];
  
  while ((match = regex.exec(content)) !== null) {
    componentsToExport.push(match[1]);
  }

  if (componentsToExport.length > 0) {
    // Replace the function declaration
    content = content.replace(regex, (fullMatch, name, args) => {
      return `const ${name} = (${args}) => {`;
    });

    // Append the exports at the end
    componentsToExport.forEach(name => {
      content += `\nexport default ${name};\n`;
    });
  }

  // Handle regular "export function Name(args) {"
  const regex2 = /export\s+function\s+([A-Za-z0-9_]+)\s*\(([^)]*)\)\s*\{/g;
  content = content.replace(regex2, (fullMatch, name, args) => {
    return `export const ${name} = (${args}) => {`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
  }
});

console.log('Refactored functions to arrow functions.');
