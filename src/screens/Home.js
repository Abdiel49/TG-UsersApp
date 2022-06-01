import {StyleSheet, View} from 'react-native';
import React from 'react';
import SearchInput from '../components/molecules/search/SearchInput';
import {colors} from '../styles/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: '#000',
  },
});
