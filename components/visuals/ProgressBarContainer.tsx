import { View } from 'react-native';
import { VisualIcon } from '@components/visuals/VisualIcon';
import styles from '@styles/ProgressBarContainer';

type StatusProgress = 'starting' | 'middle' | 'finished';

type ProgressBarContainerProps = {
  status?: StatusProgress;
};

export default function ProgressBarContainer({
  status,
}: ProgressBarContainerProps) {
  if (status == 'middle') {
    return <ProgressMiddle />;
  } else if (status == 'finished') {
    return <ProgressFinished />;
  }

  return <ProgressStarting />;
}

const DefaultLine = () => {
  return <View style={styles.defaultLine} />;
};

const RadioChecked = () => {
  return (
    <VisualIcon type="radio-button-checked" style={styles.indicatorIcon} />
  );
};

const RadioUnChecked = () => {
  return (
    <VisualIcon type="radio-button-unchecked" style={styles.indicatorIcon} />
  );
};

const ProgressStarting = () => {
  return (
    <View style={styles.container}>
      <RadioChecked />
      <DefaultLine />
      <RadioUnChecked />
      <DefaultLine />
      <RadioUnChecked />
    </View>
  );
};

const ProgressMiddle = () => {
  return (
    <View style={styles.container}>
      <RadioUnChecked />
      <DefaultLine />
      <RadioChecked />
      <DefaultLine />
      <RadioUnChecked />
    </View>
  );
};

const ProgressFinished = () => {
  return (
    <View style={styles.container}>
      <RadioUnChecked />
      <DefaultLine />
      <RadioUnChecked />
      <DefaultLine />
      <RadioChecked />
    </View>
  );
};
