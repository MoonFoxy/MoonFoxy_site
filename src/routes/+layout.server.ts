import { startClient } from '$lib/modules/i18n';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  return startClient();
}
