import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default {
  title: 'Core/Tab',
  component: Tab,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Tab value="one" active={true} onClick={() => {}}>
        One
      </Tab>
    </div>
  );
};

export const Default = Template.bind({});
