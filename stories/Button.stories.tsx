import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { InputButton } from '@/components/buttons/InputButton';

const meta = {
  title: 'InputButton',
  component: InputButton,
  args: {
    label: 'Button',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof InputButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    typeButton: 'depositBlue',
  },
};
