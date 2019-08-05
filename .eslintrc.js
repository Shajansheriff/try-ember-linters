module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  rules: {
    'ember-suave/no-const-outside-module-scope': 'off',
    'ember-suave/no-direct-property-access': 'off',
    'no-case-declarations': 'off',
    'no-useless-escape': 'off'
  },
  globals: {
    'server': true,
    'document': true,
    'window': true,
    '-Promise': true,
    'process': true,
    'require': true,
    'module': true,
    '$': true,
    '_': true,
    'nw': true,
    'moment': true,
    'CKEDITOR': true,
    'isValidNumber': true,
    'linkify': true,
    'linkifyHtml': true,
    'linkifyStr': true,
    'postRobot': true,
    'Raven': true,
    'AmCharts': true,
    'Uint8Array': true,  // for toBlob
    'DOMPurify': true,
    'ga': true, // For Google Analytics
    'async_load': true, // For Pardot
    'hljs': true // For code snippet highlight in CKEditor
  },
  overrides: [
    // node files
    {
      files: [
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
