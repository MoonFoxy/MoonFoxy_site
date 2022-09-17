import { writable } from 'svelte/store';

import * as colorPairs from './color_pairs.json';

// Get random pair from colors and shuffle that array
export function getRandomPair(): string[] {
  return colorPairs.colors[Math.floor(Math.random() * colorPairs.colors.length)]
    .slice()
    .sort(() => Math.random() - 0.5);
}

export const pair = writable(['#000000FF', '#FFFFFFFF']);
