import { startClient } from '../lib/modules/i18n';

/** @type {import('./$types').LayoutServerLoad} */
export async function load(): Promise<void> {
  await startClient();
  return Promise.resolve();
}
