import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import CommunityPostItem from "@/components/Cards/CommunityPostItem";

const meta = {
  title: "CommunityPostItem",
  component: CommunityPostItem,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CommunityPostItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    readStatus: true,
    communityName: "Cut",
    postTime: "9:40 AM",
    postBody: "Hola comunidad, este espacio es para que nos dejen sus mensajes"
  },
};
