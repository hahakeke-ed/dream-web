// lib/siteFlags.ts
export const SHOW_MIND_SERVICE =
  typeof process !== 'undefined' &&
  process.env.NEXT_PUBLIC_SHOW_MIND_SERVICE === 'true';
