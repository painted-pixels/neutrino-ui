import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from '@neutrino-ui/styles';

export const decorators = [
  (Story: Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}