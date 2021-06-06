import { Meta, Story } from '@storybook/react/types-6-0';

import Button from '.';
import type { ButtonProps } from '.'
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: Story<ButtonProps> = (args:any) => <Button {...args} variant='primary' />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};