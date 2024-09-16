import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import Map from "@/components/cards/Map";

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

export const FirstExample: Story = {
  args: {
    origin: null,
    destination: null,
  },
};

export const SecondExample: Story = {
  args: {
    origin: { latitude: 20.611603035337392, longitude: -103.2101955611849 },
    destination: null,
  },
};

export const ThirdExample: Story = {
  args: {
    origin: { latitude: 20.611603035337392, longitude: -103.2101955611849 },
    destination: { latitude: 20.56651, longitude: -103.22825 },
  },
};
