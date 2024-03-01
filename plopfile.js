const toCamelWord = (word, idx) =>
  idx === 0
    ? word.toLowerCase()
    : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const toCamelCase = (text) =>
  text
    .split(/[_-\s]+/)
    .map(toCamelWord)
    .join('');

module.exports = function (plop) {
  plop.addHelper(
    'directory',
    (type, comp) => `packages/ui/${type}/${toCamelCase(comp)}`
  );

  plop.addHelper('storyName', (comp) => `${toCamelCase(comp)}.stories.jsx`);

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'What do you want to create?',
        choices: ['atoms', 'components'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of it?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{directory type name}}/index.jsx',
        templateFile: 'plop-templates/component/component.hbs',
      },
      {
        type: 'add',
        path: '{{directory type name}}/{{storyName name}}',
        templateFile: 'plop-templates/component/story.hbs',
      },
      {
        type: 'add',
        path: '{{directory type name}}/style.js',
        templateFile: 'plop-templates/component/style.hbs',
      },
      {
        type: 'append',
        description:
          'Appends the export of atom/component to the atoms/components index',
        path: 'packages/ui/{{type}}/index.jsx',
        templateFile: 'plop-templates/component/export.hbs',
      },
    ],
  });

  plop.setGenerator('package', {
    description: 'Create a new package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your package?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{camelCase name}}/index.js',
        templateFile: 'plop-templates/package/index.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{camelCase name}}/.eslintrc.cjs',
        templateFile: 'plop-templates/package/eslint.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{camelCase name}}/package.json',
        templateFile: 'plop-templates/package/packageJson.hbs',
      },
    ],
  });
};
