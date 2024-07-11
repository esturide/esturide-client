import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import CardTravelInfoPassenger from "@/components/Cards/CardTravelInfoPassenger";
import * as Crypto from "expo-crypto";

const meta = {
  title: "CardTravelInfoPassenger",
  component: CardTravelInfoPassenger,
  args: {
    driverName: "Raul Jimenez Rodriguez",
    vehicleModel: "Audi 2014",
    vehiclePlates: "JLV687",
    departureTime: "7:20 am",
    arrivalTime: "8:06 am",
    price: 10,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CardTravelInfoPassenger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    seatsArr: [
      { id: Crypto.randomUUID(), value: "A" },
      { id: Crypto.randomUUID(), value: "B" },
      { id: Crypto.randomUUID(), value: "C" },
    ],
  },
};

export const Example2: Story = {
  args: {
    seatsArr: [
      { id: Crypto.randomUUID(), value: "B" },
      { id: Crypto.randomUUID(), value: "C" },
    ],
  },
};

export const Example3: Story = {
  args: {
    seatsArr: [{ id: Crypto.randomUUID(), value: "C" }],
  },
};
