module.exports = {
  '**/*.js': 'node_modules/.bin/eslint --cache',
  'app/**/*.hbs': 'node_modules/.bin/ember-template-lint',
  'app/**/*.less': 'node_modules/.bin/stylelint'
};