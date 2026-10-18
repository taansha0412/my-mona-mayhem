import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['dist/**', '.astro/**', 'node_modules/**', 'workshop/**'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	...astro.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,cjs,ts,astro}'],
		plugins: {
			'@stylistic': stylistic,
		},
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { args: 'all' }],
			'@stylistic/indent': ['error', 'tab'],
			'@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
		},
	},
);
