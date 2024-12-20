import React from 'react';
import { router } from 'expo-router';
import { Pressable, Text } from 'react-native';
import styles from '@styles/buttons/HyperLinkStyle';

type Props = {
  label: string;
  href: string;
  onClick?: () => Promise<void> | null;
};

export default function HyperLink({ label, href, onClick }: Props) {
  const onPress = async () => {
    if (onClick) {
      await onClick();
    }

    router.replace(href);
  };

  return (
    <Pressable onPress={onPress}>
      <Text style={styles.registerText}>{label}</Text>
    </Pressable>
  );
}
