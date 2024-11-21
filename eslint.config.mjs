import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: {...globals.browser, ...globals.jest, ...globals.node} }, 
  ignores: [
    'node_modules/',
    '**/node_modules/',
    '/**/node_modules/*',
    'out/',
    'dist/',
    'build/',
  ]},
  pluginJs.configs.recommended,
];