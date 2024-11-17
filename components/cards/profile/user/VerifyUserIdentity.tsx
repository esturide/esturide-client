import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import styles from '@styles/VerifyUserIdentityStyle';

type Props = {
  code: string;
  onTouch?: (code: string) => Promise<void>;
};

export const VerifyUserIdentity = ({ code, onTouch }: Props) => {
  const onPressed = async () => {
    if (onTouch) {
      await onTouch(code);
    }

    console.log('Touch event');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity accessibilityRole="button" onPress={onPressed}>
          <QRCode
            logoSize={30}
            value={code}
            logoBackgroundColor="transparent"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
