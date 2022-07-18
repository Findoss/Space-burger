export default function (plop) {
  plop.setGenerator('component', {
    description: 'react component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name: ',
      },
      {
        type: 'confirm',
        name: 'isStore',
        message: 'add store? ',
      },
      {
        type: 'confirm',
        name: 'isShared',
        message: 'is shared component? ',
      },
      {
        type: 'confirm',
        name: 'isShared',
        message: 'is shared component? ',
      },
    ],
    actions: function (data) {
      let path = '../../src/features';

      if (data.isShared) {
        path = '../../src/shared/ui';
      }

      const actions = [
        {
          type: 'add',
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
          templateFile: 'templates/component/component.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{kebabCase name}}/index.ts`,
          templateFile: 'templates/component/index.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{kebabCase name}}/types.ts`,
          templateFile: 'templates/component/types.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{kebabCase name}}/__tests__/{{kebabCase name}}.test.ts`,
          templateFile: 'templates/component/test.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{kebabCase name}}/styles.module.css`,
          templateFile: 'templates/component/styles.hbs',
        },
        {
          type: 'add',
          path: `${path}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx`,
          templateFile: 'templates/component/stories.hbs',
        },
      ];
      return actions;
    },
  });
}
