// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

/** @type {import('eslint').Linter.Config} */
const config = {
    overrides: [
        {
            extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: path.join(__dirname, 'tsconfig.json'),
            },
            rules: {
                '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
                '@typescript-eslint/require-await': ['off'],
                '@typescript-eslint/no-unsafe-assignment': ['off'],
                '@typescript-eslint/no-unsafe-member-access': ['off'],
                '@typescript-eslint/no-unsafe-call': ['warn'],
                '@typescript-eslint/no-unsafe-return': ['warn'],
                '@typescript-eslint/no-unsafe-argument': ['warn'],
                '@typescript-eslint/no-misused-promises': ['warn'],
                '@typescript-eslint/restrict-plus-operands': ['warn'],
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: path.join(__dirname, 'tsconfig.json'),
    },
    plugins: ['@typescript-eslint'],
    extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
    rules: {
        '@typescript-eslint/consistent-type-imports': [
            'warn',
            {
                prefer: 'type-imports',
                fixStyle: 'inline-type-imports',
            },
        ],
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
}

module.exports = config
