import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import CardPost from '@/components/cards/CardPost';

const meta = {
  title: 'CardPost',
  component: CardPost,
  args: {
    userName: 'User Name',
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CardPost>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    date: '18 de marzo a las 12:00AM',
    body: 'Hola comunidad, empezaron las competencias de robótica en las explanadas de aulas amplias.',
    likeCount: 15,
    commentCount: 7,
  },
};
