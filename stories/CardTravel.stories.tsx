import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import CardTravel from "@/components/Cards/CardTravel";

const meta = {
  title: "CardTravel",
  component: CardTravel,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CardTravel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    departTime: "7:20 am",
    arrivalTime: "8:06 am",
    price: 10.0,
    seatsArr: [
      { id: crypto.randomUUID(), value: "A" },
      { id: crypto.randomUUID(), value: "B" },
      { id: crypto.randomUUID(), value: "C" },
    ],
  },
};

export const Example2: Story = {
  args: {
    departTime: "7:20 am",
    arrivalTime: "8:06 am",
    price: 10.0,
    seatsArr: [
      { id: crypto.randomUUID(), value: "B" },
      { id: crypto.randomUUID(), value: "C" },
    ],
  },
};

export const Example3: Story = {
  args: {
    departTime: "7:20 am",
    arrivalTime: "8:06 am",
    price: 10.0,
    seatsArr: [{ id: crypto.randomUUID(), value: "C" }],
  },
};
