import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureNavButton } from './NavButton';

import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const icons = {
  ProfileIcon: <ProfileIcon type="secondary" />,
  BurgerIcon: <BurgerIcon type="secondary" />,
  ListIcon: <ListIcon type="secondary" />,
};

export default {
  title: 'Components/PureNavButton',
  component: PureNavButton,
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          ListIcon: 'ListIcon1',
          BurgerIcon: 'BurgerIcon2',
          ProfileIcon: 'ProfileIcon3',
        },
      },
    },
  },
} as ComponentMeta<typeof PureNavButton>;

const Template: ComponentStory<typeof PureNavButton> = (args) => (
  <PureNavButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  to: '',
  title: 'title',
};
