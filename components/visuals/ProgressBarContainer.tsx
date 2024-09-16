import * as React from 'react';
import { View } from 'react-native';
import styles from '@styles/Visuals';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { VisualIcon } from '@components/visuals/VisualIcon';

interface ProgressBarContainerProps {
  type: 'ProgressBar2' | 'ProgressBar3';
}

const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({
  type,
}) => {
  return <>{type === 'ProgressBar2' ? <ProgressBar2 /> : <ProgressBar3 />}</>;
};

const ProgressBar2 = () => {
  return (
    <View style={styles.progressBar2}>
      <View style={styles.progressBar3}>
        <Icon name="radio-button-checked" style={styles.indicatorIcon} />
        <View style={styles.defaultLine} />
        <Icon name="radio-button-unchecked" style={styles.indicatorIcon} />
      </View>
    </View>
  );
};

const ProgressBar3 = () => {
  return (
    <View style={styles.progressBar3}>
      <Icon name="radio-button-checked" style={styles.indicatorIcon} />
      <View style={styles.defaultLine} />
      <Icon name="radio-button-unchecked" style={styles.indicatorIcon} />
      <View style={styles.defaultLine} />
      <Icon name="radio-button-unchecked" style={styles.indicatorIcon} />
    </View>
  );
};

export default ProgressBarContainer;
