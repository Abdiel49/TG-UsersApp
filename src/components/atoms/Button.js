import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../styles/colors';
import TextBase from './TextBase';
import normalize from '../../helpers/Dimensions/normalize';

const Button = ({label, style, labelStyle}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      activeOpacity={0.65}>
      {label && (
        <TextBase style={[styles.buttonLabel, labelStyle]} text={label} />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.acction,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    minWidth: 100,
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: normalize(20),
  },
});
