import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import CommunityPostList from '@/components/cards/CommunityPostList';
import * as Crypto from 'expo-crypto';

const DATA = [
  {
    id: Crypto.randomUUID(),
    readStatus: true,
    communityName: 'Cut',
    postTime: '9:40 AM',
    postBody:
      'Hola comunidad, este espacio es para que nos dejen sus mensajes.',
  },
  {
    id: Crypto.randomUUID(),
    readStatus: false,
    communityName: 'Futbol',
    postTime: '11:00 AM',
    postBody: 'Hoy se arman las retas a las 3:00',
  },
  {
    id: Crypto.randomUUID(),
    readStatus: false,
    communityName: 'Futbol',
    postTime: '11:00 AM',
    postBody: 'Hoy se arman las retas a las 3:00',
  },
];

const meta = {
  title: 'CommunityPostList',
  component: CommunityPostList,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CommunityPostList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    dataArr: DATA,
  },
};
