import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  server: {
    hmr: true,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
};

export default config;
