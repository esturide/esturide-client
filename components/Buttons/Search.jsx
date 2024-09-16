import * as React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '@/styles/InputButtons';

const Search = (props) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#dcdcdc"
        underlineColorAndroid="transparent"
      />
      <Icon name="search" style={styles.searchIcon} />
    </View>
  );
};

export default Search;
