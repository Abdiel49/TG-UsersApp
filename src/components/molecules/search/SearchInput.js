import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../styles/colors';
import normalize from '../../../helpers/Dimensions/normalize';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState(null);
  const [iconName, setIconName] = useState('ios-search');

  const onChange = text => {
    setInputValue(text);
  };

  const handleSearch = () => {
    if (iconName === 'ios-close') {
      setIconName('ios-search');
      setInputValue(null);
    } else if (inputValue) {
      console.log('Search input value', inputValue);
      setIconName('ios-close');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={inputValue || ''}
        onChangeText={onChange}
        blurOnSubmit={true}
        returnKeyType="search"
        placeholder="Search"
        placeholderTextColor={colors.grey}
        onSubmitEditing={handleSearch}
      />
      <Ionicons name={iconName} style={styles.icon} onPress={handleSearch} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  textInput: {
    color: colors.white,
    fontSize: normalize(16),
    // backgroundColor: colors.white,
    width: '90%',
  },
  icon: {
    color: colors.white,
    fontSize: normalize(30),
    alignSelf: 'center',
  },
});
