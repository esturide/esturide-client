import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Map from "@/components/Cards/Map";

const meta = {
  title: "Map",
  component: Map,
  args: {
    mapSize: { height: 1300, width: 370 },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Map>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
};
