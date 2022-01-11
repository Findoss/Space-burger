import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { addParameters } from '@storybook/react';
import { I18nProviderWrapper } from 'plugins/storybook/decorator-i18n';

import { PureHeader } from './Header';

export default {
  title: '  Components/PureHeader',
  component: PureHeader,
  parameters: {
    i18n: {
      provider: I18nProviderWrapper,
      supportedLocales: ['ru'],
    },
  },
} as ComponentMeta<typeof PureHeader>;

const Template: ComponentStory<typeof PureHeader> = (args) => (
  <PureHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
};
