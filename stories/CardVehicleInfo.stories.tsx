import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import CardVehicleInfo from "@/components/Cards/CardVehicleInfo";

const meta = {
  title: "CardVehicleInfo",
  component: CardVehicleInfo,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CardVehicleInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    model: "Modelo",
    plates: "Placas",
    carColorString: "Color",
  },
};
