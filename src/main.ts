import { startClient } from './lib/i18n';
import App from './App.svelte';

startClient();

const app = new App({
  target: document.getElementById('app'),
});

export default app;
