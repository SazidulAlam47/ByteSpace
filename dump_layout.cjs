const fs = require('fs');
const header = JSON.parse(fs.readFileSync('D:/Web_Development/task/doin-tech/header_node.json', 'utf8'));

function rgbToHex(color) {
    if(!color) return '';
    const r = Math.round(color.r * 255).toString(16).padStart(2, '0');
    const g = Math.round(color.g * 255).toString(16).padStart(2, '0');
    const b = Math.round(color.b * 255).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}

function dump(node, depth = 0) {
    const p = '  '.repeat(depth);
    const box = node.absoluteBoundingBox || node.absoluteRenderBounds || {};
    let pos = '';
    if(box.x !== undefined) pos += `x:${Math.round(box.x)}, y:${Math.round(box.y)}, w:${Math.round(box.width)}, h:${Math.round(box.height)}`;
    let styles = [];
    if(node.style) {
        styles.push(`font: ${node.style.fontWeight} ${Math.round(node.style.fontSize)}px ${node.style.fontFamily}, lineHeight: ${Math.round(node.style.lineHeightPx)}px`);
    }
    if(node.fills && node.fills[0] && node.fills[0].color) {
        styles.push(`fill: ${rgbToHex(node.fills[0].color)}`);
    }
    console.log(`${p}- ${node.name} (${node.type}) ${pos}`);
    if(styles.length) console.log(`${p}  ${styles.join(' | ')}`);
    if(node.layoutMode) {
        console.log(`${p}  Layout: ${node.layoutMode}, spacing: ${node.itemSpacing}, pad: ${node.paddingTop} ${node.paddingRight} ${node.paddingBottom} ${node.paddingLeft}`);
    }
    if(node.children) node.children.forEach(c => dump(c, depth + 1));
}
dump(header);
