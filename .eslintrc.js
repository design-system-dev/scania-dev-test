module.exports = {
    env: {
        node: true,
        es2022: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
        'no-var': 2,
        'prefer-const': 2,
    },
};
