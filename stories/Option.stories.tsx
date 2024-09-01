import * as React from "react";
import { Meta, Story } from "@storybook/react";
import { TouchableOpacity, View } from "react-native";
import Option from "@/components/Buttons/Option";

const meta: Meta<typeof Option> = {
  title: "Components/Option",
  component: Option,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

const Template: Story<typeof Option> = (args) => (
  <TouchableOpacity>
    <Option {...args} />
  </TouchableOpacity>
);

export const Default = Template.bind({});
Default.args = {};
