import { NodePlopAPI } from 'plop';

export default function (plop: NodePlopAPI) {
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
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'cli/templates/component/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'cli/templates/component/index.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/types.ts',
        templateFile: 'cli/templates/component/types.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.ts',
        templateFile: 'cli/templates/component/test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'cli/templates/component/styles.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'cli/templates/component/stories.hbs',
      },
    ],
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
        path: 'src/api/{{pascalCase name}}/entity.ts',
        templateFile: 'cli/templates/api/entity.hbs',
      },
      {
        type: 'add',
        path: 'src/api/{{pascalCase name}}/format.ts',
        templateFile: 'cli/templates/api/format.hbs',
      },
      {
        type: 'add',
        path: 'src/api/{{pascalCase name}}/index.ts',
        templateFile: 'cli/templates/api/index.hbs',
      },
      {
        type: 'add',
        path: 'src/api/{{pascalCase name}}/types.ts',
        templateFile: 'cli/templates/api/types.hbs',
      },
      {
        type: 'add',
        path: 'src/api/{{pascalCase name}}/__mocks__/{{pascalCase name}}.ts',
        templateFile: 'cli/templates/api/mock.hbs',
      },
    ],
  });
}
