import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const localeDir = path.join(root, 'locales');
const defaultFile = path.join(localeDir, 'en.default.json');
const targetFiles = ['ko.json', 'ja.json'].map((file) => path.join(localeDir, file));

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));

const flatten = (value, prefix = '', output = new Map()) => {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    for (const [key, child] of Object.entries(value)) {
      const next = prefix ? `${prefix}.${key}` : key;
      flatten(child, next, output);
    }
    return output;
  }

  output.set(prefix, value);
  return output;
};

const placeholders = (value) => {
  if (typeof value !== 'string') return [];
  return [...value.matchAll(/\{\{\s*([\w.]+)\s*\}\}/g)]
    .map((match) => match[1])
    .sort();
};

const baseline = flatten(readJson(defaultFile));
let failed = false;

for (const file of targetFiles) {
  const current = flatten(readJson(file));
  const relative = path.relative(root, file);
  const missing = [...baseline.keys()].filter((key) => !current.has(key));
  const extra = [...current.keys()].filter((key) => !baseline.has(key));

  if (missing.length) {
    failed = true;
    console.error(`[locale] ${relative} missing keys:`);
    missing.forEach((key) => console.error(`  - ${key}`));
  }

  if (extra.length) {
    failed = true;
    console.error(`[locale] ${relative} extra keys:`);
    extra.forEach((key) => console.error(`  - ${key}`));
  }

  for (const [key, baselineValue] of baseline.entries()) {
    if (!current.has(key)) continue;

    const expected = placeholders(baselineValue);
    const actual = placeholders(current.get(key));

    if (expected.join('|') !== actual.join('|')) {
      failed = true;
      console.error(
        `[locale] ${relative} placeholder mismatch at ${key}: expected [${expected.join(', ')}], got [${actual.join(', ')}]`
      );
    }
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log(`Locale parity PASS: en.default.json -> ${targetFiles.map((file) => path.basename(file)).join(', ')}`);
}
