import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from '.';
import type { ButtonProps } from '.'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
  },
} as Meta;

const Template: Story<ButtonProps> = (args:any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};