import {StyleSheet, View} from 'react-native';
import React from 'react';

const Separator = ({style}) => {
  return <View style={[styles.separator, style]} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    alignSelf: 'center',
    width: '70%',
    backgroundColor: '#CED0CE99',
    marginVertical: 14,
  },
});
