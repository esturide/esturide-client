import React from 'react';
import { Meta, Story } from '@storybook/react';
import { View } from 'react-native';
import BottomSheetModal from '@components/modals/sheets/BottomSheetModal';
import styles from '@styles/modals/BottomSheetsStyleModal';

const meta: Meta<typeof BottomSheetModal> = {
  title: 'Components/BottomSheet',
  component: BottomSheetModal,
  decorators: [
    (Story) => (
      <View style={styles.bottomSheetContainer}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

const Template: Story<typeof BottomSheetModal> = (args) => (
  <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    <BottomSheetModal />
  </View>
);

export const Default = Template.bind({});
Default.args = {};
