import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
import normalize from '../../helpers/Dimensions/normalize';

const TextBase = ({text, style}) => {
  return <Text style={[styles.text, style]}>{text || ''}</Text>;
};

export default TextBase;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: normalize(16),
  },
});
