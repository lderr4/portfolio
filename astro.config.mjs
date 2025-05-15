// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
        host: true,
        port: 4321
    },
    vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000, // Check for changes every 1000ms (1s)
      },
    },
  }
});
