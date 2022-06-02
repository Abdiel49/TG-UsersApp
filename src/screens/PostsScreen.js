import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {colors} from '../styles/colors';
import AppContext from '../context/AppContext';

const PostsScreen = () => {
  const {state} = useContext(AppContext);
  const {userSelectedId = 8} = state;
  console.log('posts cliente selected id: ', userSelectedId);
  // console.log('posts cliente selected: ', userSelected);
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
