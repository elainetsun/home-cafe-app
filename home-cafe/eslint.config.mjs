// eslint.config.mjs
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Accessibility rules
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/no-onchange": "warn"
    },
    ignores: ["node_modules/**", ".next/**", "dist/**"],
  },
];
