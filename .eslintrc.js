module.exports = {
    env: {
        node: true,
        es2020: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
        'no-var': 2,
        'prefer-const': 2,
    },
    overrides: [
        {
            files: ['packages/components/**/*.{ts,tsx}'],
            extends: ['plugin:@stencil/recommended', 'prettier'],
            parserOptions: {
                project: ['tsconfig.json'],
            },
        },
        {
            files: ['packages/app/**/*.js'],
            extends: ['plugin:react/recommended', 'prettier'],
        },
        {
            files: ['**/*.{spec,e2e}.{js,ts,tsx}'],
            env: {
                'jest/globals': true,
            },
            plugins: ['jest'],
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'prettier',
            ],
        },
    ],
};
