import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {colors} from '../../styles/colors';
import TextBase from '../atoms/TextBase';
import normalize from '../../helpers/Dimensions/normalize';

const UserItem = ({userData, idSelected, onSelectUser}) => {
  /**
   * It's a function that takes in a userData object and returns a function that calls the onSelectUser
   * function with the userData object as an argument
   */
  const handleSelectUser = () => {
    onSelectUser(userData);
  };

  /* Checking if the idSelected user is equal to the id of the user. */
  const isSelected = idSelected && idSelected === userData.id;

  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      activeOpacity={0.8}
      onPress={handleSelectUser}>
      <View style={styles.row}>
        <TextBase text={userData.name} style={styles.title} />
      </View>
      <View style={styles.row}>
        <TextBase text={'Email: '} />
        <TextBase text={userData.email} />
        <TextBase text={'\t|\t'} style={styles.separator} />
        <TextBase text={userData.website} />
      </View>
    </TouchableOpacity>
  );
};

export default UserItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: colors.grey,
  },
  selected: {
    backgroundColor: colors.primary_200,
  },
  row: {
    flexDirection: 'row',
  },
  separator: {
    marginHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: normalize(18),
  },
});
