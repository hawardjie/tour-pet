const fs = require('fs');
const path = require('path');

// Read the generated behavior translations
const behaviorsEn = JSON.parse(fs.readFileSync(path.join(__dirname, 'output/behaviors-en.json'), 'utf-8'));
const behaviorsZh = JSON.parse(fs.readFileSync(path.join(__dirname, 'output/behaviors-zh.json'), 'utf-8'));

// Read the existing translation files
const enPath = path.join(__dirname, '../messages/en.json');
const zhPath = path.join(__dirname, '../messages/zh-CN.json');

const existingEn = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
const existingZh = JSON.parse(fs.readFileSync(zhPath, 'utf-8'));

// Ensure behavior namespace exists
if (!existingEn.behavior) {
  existingEn.behavior = {};
}
if (!existingZh.behavior) {
  existingZh.behavior = {};
}

// Merge behavior translations into the behavior namespace
Object.assign(existingEn.behavior, behaviorsEn);
Object.assign(existingZh.behavior, behaviorsZh);

// Write back to files
fs.writeFileSync(enPath, JSON.stringify(existingEn, null, 2));
fs.writeFileSync(zhPath, JSON.stringify(existingZh, null, 2));

console.log('✅ Successfully merged behavior translations!');
console.log(`   Added ${Object.keys(behaviorsEn).length} English keys to behavior namespace`);
console.log(`   Added ${Object.keys(behaviorsZh).length} Chinese keys to behavior namespace`);
