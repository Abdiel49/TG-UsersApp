import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';

const TextBase = ({text, style}) => {
  return <Text style={[styles.text, style]}>{text || ''}</Text>;
};

export default TextBase;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 16,
  },
});
