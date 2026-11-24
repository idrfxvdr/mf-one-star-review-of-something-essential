import { mkdirSync, writeFileSync } from 'node:fs';

const entry = '★☆☆☆☆ Sleep. Tried to check in at 11 p.m. Turned away. Tried again at 3 a.m. Turned away. Finally let in at 6:57. Checkout was 7.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', entry, 'utf8');
