import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import Search from '@/components/Buttons/Search'; 

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

const Template: Story<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {};
