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
  let originalContent = content;

  // Regex to match exact "import React from 'react';" or "import React from "react";"
  // Handles optional semi-colons and subsequent line breaks
  const regex = /^import\s+React\s+from\s+['"]react['"];?[\r\n]*/gm;
  content = content.replace(regex, '');

  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Removed from ${file}`);
  }
});

// Let's also check the root files just in case (main.tsx is probably inside src though)
