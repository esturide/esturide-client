import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import CustomRadioButtonGroup from "@/components/cards/CustomRadioButtonGroup";
import * as Crypto from "expo-crypto";

const DATA = [
  {
    id: Crypto.randomUUID(),
    cardLogo: "MasterCard",
    cardBank: "Banco NU",
    cardNumber: "**** **** **** 8395",
  },
  {
    id: Crypto.randomUUID(),
    cardLogo: "VISA",
    cardBank: "RappiCard",
    cardNumber: "**** **** **** 6246",
  },
  {
    id: Crypto.randomUUID(),
    cardLogo: "VISA",
    cardBank: "RappiCard",
    cardNumber: "**** **** **** 6246",
  },
  {
    id: Crypto.randomUUID(),
    cardLogo: "VISA",
    cardBank: "RappiCard",
    cardNumber: "**** **** **** 6246",
  },
];

const meta = {
  title: "CustomRadioButtonGroup",
  component: CustomRadioButtonGroup,
  args: {
    typeButton: "driver",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CustomRadioButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    data: DATA,
  },
};
