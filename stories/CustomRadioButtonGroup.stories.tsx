import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import CustomRadioButtonGroup from "@/components/Cards/CustomRadioButtonGroup";

const DATA = [
  {
    id: crypto.randomUUID(),
    cardLogo: "MasterCard",
    cardBank: "Banco NU",
    cardNumber: "**** **** **** 8395",
  },
  {
    id: crypto.randomUUID(),
    cardLogo: "VISA",
    cardBank: "RappiCard",
    cardNumber: "**** **** **** 6246",
  },
  {
    id: crypto.randomUUID(),
    cardLogo: "VISA",
    cardBank: "RappiCard",
    cardNumber: "**** **** **** 6246",
  },
  {
    id: crypto.randomUUID(),
    cardLogo: "VISA",
    cardBank: "RappiCard",
    cardNumber: "**** **** **** 6246",
  },
];

const meta = {
  title: "CustomRadioButtonGroup",
  component: CustomRadioButtonGroup,
  args: {
    typeRadio: "driver",
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
