import { register, init, getLocaleFromNavigator, locale as $locale } from 'svelte-i18n';

// eslint-disable-next-line import/extensions
import { browser } from '$app/environment';

const INIT_OPTIONS = {
  fallbackLocale: 'en',
  initialLocale: 'en',
  warnOnMissingMessages: true,
};

const supportedLanguage = ['en', 'ru'];
register('en', () => import('../../locales/en.json'));
register('ru', () => import('../../locales/ru.json'));

let isLoaded = false;
$locale.subscribe(value => {
  if (value === null || value === undefined) return;

  if (isLoaded) localStorage.setItem('locale', value);
});

// Initialize the i18n library in client
export async function startClient(): Promise<void> {
  await init({
    ...INIT_OPTIONS,
  });

  if (browser) {
    let used = 'en';
    const savedLocale = localStorage.getItem('locale');
    const detectedLocale = getLocaleFromNavigator()?.substring(0, 2) ?? used;
    if (savedLocale !== null) {
      if (!supportedLanguage.includes(savedLocale)) {
        localStorage.setItem('locale', 'en');
      } else {
        used = savedLocale;
      }
    } else if (supportedLanguage.includes(detectedLocale)) {
      used = detectedLocale;
    }

    await $locale.set(used);
    isLoaded = true;
    // eslint-disable-next-line no-console
    console.log('Change i18n', used);
  }
}
