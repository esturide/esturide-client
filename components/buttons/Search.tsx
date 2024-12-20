import { TextInput, View } from 'react-native';
import { VisualIcon } from '@components/visuals/VisualIcon';
import styles from '@styles/InputButtons';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#dcdcdc"
        underlineColorAndroid="transparent"
      />
      <VisualIcon type={'search'} style={styles.optionIcon} />
    </View>
  );
};

export default Search;
