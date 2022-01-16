import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageMain } from './Main';

export default {
  title: 'Pages/PageMain',
  component: PageMain,
} as ComponentMeta<typeof PageMain>;

const Template: ComponentStory<typeof PageMain> = () => <PageMain />;

export const Default = Template.bind({});
// Default.args = {
//   className: 'class',
// };
