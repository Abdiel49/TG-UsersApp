import {StyleSheet, View} from 'react-native';
import React from 'react';
import SearchInput from '../components/molecules/search/SearchInput';
import {colors} from '../styles/colors';
import Button from '../components/atoms/Button';

const Home = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <View style={styles.putIn}>
        <Button label="Ingresar" />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  putIn: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
});
