import { defineConfig, globalIgnores } from 'eslint/config';
import rango from 'eslint-config-rango';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default defineConfig([
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'coverage/**',
    'next-env.d.ts',
  ]),
  ...rango,
  // Rango enables react-in-jsx-scope; the automatic JSX runtime doesn't need it.
  react.configs.flat['jsx-runtime'],
  // Root config files run in Node.
  {
    files: ['*.{js,cjs,mjs,ts,mts}'],
    languageOptions: { globals: globals.node },
  },
  {
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: true },
    },
  },
]);
