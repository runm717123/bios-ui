import fs from 'fs';
import { makeBadge } from 'badge-maker';

const summary = JSON.parse(fs.readFileSync('coverage/coverage-summary.json', 'utf8'));
const pct = summary.total.lines.pct;

const color =
  pct >= 90 ? 'brightgreen'
  : pct >= 80 ? 'green'
  : pct >= 70 ? 'yellowgreen'
  : pct >= 60 ? 'orange'
  : 'red';

const svg = makeBadge({
  label: 'svelte/coverage',
  message: `${pct}%`,
  color,
});

fs.writeFileSync('coverage/coverage-badge.svg', svg);
console.log('✅ coverage-badge.svg written');
