import React from 'react';
import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import BottomSheet from '@/components/Sheets/BottomSheet';
import styles from '@/styles/Sheets'; 

const meta: Meta<typeof BottomSheet> = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  decorators: [
    (Story) => (
      <View style={styles.bottomSheetContainer}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

const Template: Story<typeof BottomSheet> = (args) => (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <BottomSheet {...args} />
    </View>
  );

export const Default = Template.bind({});
Default.args = {};
