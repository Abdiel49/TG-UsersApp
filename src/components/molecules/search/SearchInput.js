import {StyleSheet, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {colors} from '../../../styles/colors';
import normalize from '../../../helpers/Dimensions/normalize';
import {isEmail} from '../../../utils/validations';

const SearchInput = ({
  placeholder,
  initialData,
  setFilteredData,
  filterFunction,
  requestDataAsync,
  onCancelSearch,
}) => {
  const [inputValue, setInputValue] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const onChange = text => {
    setInputValue(text);
  };

  const handleSearch = async () => {
    if (inputValue && inputValue.trim().length > 0) {
      setHasSearched(true);
      const filter = {};
      const isValidEmail = isEmail(inputValue.trim());
      if (isValidEmail) {
        filter.email = inputValue.trim();
      }
      const dataFromAPI = await requestDataAsync(filter);
      if (isValidEmail) {
        setFilteredData(dataFromAPI);
      } else {
        const usersFilteresd = filterFunction(dataFromAPI, inputValue);
        setFilteredData(usersFilteresd);
      }
    }
  };

  const handleCancelSearch = () => {
    setInputValue(null);
    setFilteredData(initialData || null);
    onCancelSearch && onCancelSearch();
    setHasSearched(false);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-close"
        style={[styles.icon, styles.iconLeft, !hasSearched && styles.hide]}
        onPress={handleCancelSearch}
      />
      <TextInput
        style={styles.textInput}
        value={inputValue || ''}
        onChangeText={onChange}
        blurOnSubmit={true}
        returnKeyType="search"
        placeholder={placeholder || 'Search'}
        placeholderTextColor={colors.grey}
        onSubmitEditing={handleSearch}
      />
      <Ionicons
        name="ios-search"
        style={[styles.icon, styles.iconRight]}
        onPress={handleSearch}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    margin: 10,
    height: normalize(46),
    borderRadius: 50,
  },
  textInput: {
    color: colors.white,
    fontSize: normalize(16),
    flexGrow: 1,
  },
  icon: {
    color: colors.white,
    fontSize: normalize(30),
    alignSelf: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  hide: {
    color: colors.primary,
  },
  iconLeft: {
    paddingLeft: 15,
  },
  iconRight: {
    paddingRight: 20,
  },
});
