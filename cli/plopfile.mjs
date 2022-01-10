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
    ],
    actions: function (data) {
      const actions = [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component/component.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/component/index.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/types.ts',
          templateFile: 'templates/component/types.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.ts',
          templateFile: 'templates/component/test.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/styles.module.css',
          templateFile: 'templates/component/styles.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/component/stories.hbs',
        },
      ];

      // if(data.isStore) {
      //     actions.push({
      //         type: 'add',
      //         path: 'folder/{{dashCase name}}.txt',
      //         templateFile: 'templates/tacos.txt'
      //     });
      // }

      return actions;
    },
  });

  plop.setGenerator('api', {
    description: 'api entity',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'entity name: ',
      },
      ,
    ],
    actions: [
      {
        type: 'add',
        path: '../src/api/{{pascalCase name}}/entity.ts',
        templateFile: 'templates/api/entity.hbs',
      },
      {
        type: 'add',
        path: '../src/api/{{pascalCase name}}/format.ts',
        templateFile: 'templates/api/format.hbs',
      },
      {
        type: 'add',
        path: '../src/api/{{pascalCase name}}/index.ts',
        templateFile: 'templates/api/index.hbs',
      },
      {
        type: 'add',
        path: '../src/api/{{pascalCase name}}/types.ts',
        templateFile: 'templates/api/types.hbs',
      },
      {
        type: 'add',
        path: '../src/api/{{pascalCase name}}/__mocks__/{{pascalCase name}}.ts',
        templateFile: 'templates/api/mock.hbs',
      },
    ],
  });
}
