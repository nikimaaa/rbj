module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ["react", "react-hooks", "react-redux", "eslint-plugin-import-helpers"],
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-redux/recommended"],
    rules: {
        "react/jsx-no-bind": "error",
        "react-redux/connect-prefer-named-arguments": "off",
        "react-redux/prefer-separate-component-file": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-prototype-builtins": "off",
        "comma-dangle": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "consistent-this": ["error", "self"],
        "no-alert": "error",
        "no-constant-condition": "error",
        "no-underscore-dangle": "off",
        "no-console": "error",
        "no-unexpected-multiline": "warn",
        "react/no-direct-mutation-state": "error",
        "lines-around-comment": [
            "error",
            {
                beforeBlockComment: false,
                allowBlockStart: false,
            },
        ],
        "react/jsx-fragments": ["error", "element"],
        // "react/no-unsafe": ["error", {"checkAliases": true}],
        "import-helpers/order-imports": [
            "warn",
            {
                newlinesBetween: "always",
                alphabetize: {
                    order: "asc",
                    ignoreCase: false,
                },
                groups: [
                    ["/^react$/", "/^react-dom$/"],
                    "/^@shopify/",
                    "/^@material-ui/",
                    "module",
                    "/^@store/",
                    "/^@providers/",
                    "/^@domains/",
                    "/^@common/",
                    "/^@components/",
                    "/^@helpers/",
                    "/^@hooks/",
                    "sibling",
                    "parent",
                    "index"
                ]
            },
        ],
        "no-restricted-imports": [
            "error",
            {
                name: "lodash",
                message: "Please import specific methods one by one, e.g. \"import map from 'lodash/map'\".",
            },
        ],
    },
    settings: {
        react: {
            pragma: "React",
            version: "16.10.1",
        },
    },
    globals: {
        URLSearchParams: true,
        FormData: true,
        jest: true,
        global: true,
        module: true,
        document: true,
        window: true,
        describe: true,
        it: true,
        test: true,
        expect: true,
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    },
};