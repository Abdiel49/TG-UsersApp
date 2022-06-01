import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

import {colors} from '../../styles/colors';

const LoadingView = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={colors.acction} />
    </View>
  );
};

export default LoadingView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundOpacity,
    justifyContent: 'center',
  },
});
