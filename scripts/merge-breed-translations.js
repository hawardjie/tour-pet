const fs = require('fs');
const path = require('path');

// Read the generated breed translations
const breedsEn = JSON.parse(fs.readFileSync(path.join(__dirname, 'output/breeds-en.json'), 'utf-8'));
const breedsZh = JSON.parse(fs.readFileSync(path.join(__dirname, 'output/breeds-zh.json'), 'utf-8'));

// Read the existing translation files
const enPath = path.join(__dirname, '../messages/en.json');
const zhPath = path.join(__dirname, '../messages/zh-CN.json');

const existingEn = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
const existingZh = JSON.parse(fs.readFileSync(zhPath, 'utf-8'));

// Extract breed-specific keys from the generated translations
const breedEnKeys = {};
const breedZhKeys = {};

// Add common value translations to breeds namespace
const commonKeys = ['size', 'group', 'exercise', 'grooming', 'training'];

for (const key in breedsEn) {
  // Check if it's a breed-specific key or common translation
  if (key.startsWith('breed_') || commonKeys.some(prefix => key.startsWith(prefix))) {
    breedEnKeys[key] = breedsEn[key];
  }
}

for (const key in breedsZh) {
  if (key.startsWith('breed_') || commonKeys.some(prefix => key.startsWith(prefix))) {
    breedZhKeys[key] = breedsZh[key];
  }
}

// Merge into breeds namespace
if (!existingEn.breeds) {
  existingEn.breeds = {};
}
if (!existingZh.breeds) {
  existingZh.breeds = {};
}

Object.assign(existingEn.breeds, breedEnKeys);
Object.assign(existingZh.breeds, breedZhKeys);

// Write back to the main translation files
fs.writeFileSync(enPath, JSON.stringify(existingEn, null, 2), 'utf-8');
fs.writeFileSync(zhPath, JSON.stringify(existingZh, null, 2), 'utf-8');

console.log('✅ Successfully merged breed translations!');
console.log(`   Added ${Object.keys(breedEnKeys).length} English keys to breeds namespace`);
console.log(`   Added ${Object.keys(breedZhKeys).length} Chinese keys to breeds namespace`);
