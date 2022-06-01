import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {colors} from '../../styles/colors';
import TextBase from '../atoms/TextBase';
import normalize from '../../helpers/Dimensions/normalize';

const UserItem = ({userData}) => {
  const [selected, setSelected] = useState(false);
  const {id, name, username, email, address, phone, website, company} =
    userData;

  const onSelectUser = () => {
    setSelected(!selected);
    // console.log({id, name, username, email, address, phone, website, company});
  };
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selected]}
      activeOpacity={0.8}
      onPress={onSelectUser}>
      <View style={styles.row}>
        <TextBase text={name} style={styles.title} />
      </View>
      <View style={styles.row}>
        <TextBase text={'Email: '} />
        <TextBase text={email} />
        <TextBase text={'\t|\t'} style={styles.separator} />
        <TextBase text={website} />
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
