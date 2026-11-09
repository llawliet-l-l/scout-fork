import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
      /*
       * `server-only` throws outside the React Server environment. Tests run
       * in plain Node, so map it to the package's own empty module (what the
       * `react-server` condition resolves to). This is test-environment setup;
       * it does not mock any module under test.
       */
      'server-only': fileURLToPath(
        new URL('./node_modules/server-only/empty.js', import.meta.url),
      ),
    },
  },
  test: {
    passWithNoTests: true,
  },
});
