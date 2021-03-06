module.exports = {
  stories: ['../../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    'storybook-react-i18next',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
