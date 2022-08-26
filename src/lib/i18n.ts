import {
  register,
  init,
  getLocaleFromNavigator,
  locale as $locale,
} from 'svelte-i18n';

import { setCookie, getCookie } from './cookie';

const INIT_OPTIONS = {
  fallbackLocale: 'en',
  initialLocale: null,
  warnOnMissingMessages: true,
};

register('en', () => import('../locales/en.json'));
register('ru', () => import('../locales/ru.json'));

$locale.subscribe((value) => {
  if (value === null) return;

  // If running in the client, save the language preference in a cookie
  if (typeof window !== 'undefined') {
    setCookie('locale', value);
  }
});

// Initialize the i18n library in client
export function startClient(): void {
  init({
    ...INIT_OPTIONS,
    initialLocale: getCookie('locale') ?? getLocaleFromNavigator(),
  });
}
