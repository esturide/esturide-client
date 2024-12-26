import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import { CheckoutCardForm } from '@components/forms/CheckoutCardForm';

const meta = {
  title: 'Forms/CheckoutCardForm',
  component: CheckoutCardForm,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CheckoutCardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
