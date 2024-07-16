import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Map from "@/components/Cards/Map";

const meta = {
  title: "Map",
  component: Map,
  args: {
    mapSize: { height: "100%", width: "100%" },
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

export const Example: Story = {};

export const Example2: Story = {
  args: {
    origin: { latitude: 20.611603035337392, longitude: -103.2101955611849 },
  },
};

export const Example3: Story = {
  args: {
    origin: { latitude: 20.611603035337392, longitude: -103.2101955611849 },
    destination: { latitude: 20.56651, longitude: -103.22825 },
  },
};
