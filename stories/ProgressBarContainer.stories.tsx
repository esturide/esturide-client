import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import ProgressBarContainer from '@/components/visuals/ProgressBarContainer';

const meta: Meta<typeof ProgressBarContainer> = {
  title: 'Components/ProgressBarContainer',
  component: ProgressBarContainer,
  argTypes: {
    type: {
      control: {
        type: 'radio',
        options: ['ProgressBar2', 'ProgressBar3'],
      },
      defaultValue: 'ProgressBar3',
      description: 'Select the type of progress bar',
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

const Template: Story<typeof ProgressBarContainer> = (args) => (
  <ProgressBarContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  type: 'ProgressBar3',
};
