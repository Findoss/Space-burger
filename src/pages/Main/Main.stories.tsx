import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalsWrapper } from '../../../config/storybook/decoratorModals';

import { PageMain } from './Main';

export default {
  title: 'Pages/PageMain',
  component: PageMain,
  decorators: [ModalsWrapper],
} as ComponentMeta<typeof PageMain>;

const Template: ComponentStory<typeof PageMain> = () => <PageMain />;

export const Default = Template.bind({});
// Default.args = {
//   extraClass: 'class',
// };
