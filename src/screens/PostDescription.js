import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {colors} from '../styles/colors';

const PostDescription = () => {
  const {params} = useRoute();
  const {photoData, post} = params;
  console.log('post description - photoData', photoData);
  console.log('post description - post', post);
  return (
    <View style={styles.container}>
      <Text>PostDescription</Text>
    </View>
  );
};

export default PostDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
