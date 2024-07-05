import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import CreditCardList from "@/components/Cards/CreditCardList";

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
  title: "CreditCardList",
  component: CreditCardList,
  args:{
    typeCard: "driver",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CreditCardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    data: DATA
  },
}
