import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import React, {useContext} from 'react';

import UserItem from '../molecules/UserItem';
import Separator from '../atoms/Separator';
import AppContext from '../../context/AppContext';
import {appReducerTypes} from '../../reducers/appReducerTypes';
import normalize from '../../helpers/Dimensions/normalize';

const UsersList = ({users}) => {
  const {state, dispatch} = useContext(AppContext);
  const {userSelectedId} = state;
  const onSelectUser = user => {
    if (user && user.id) {
      if (user.id !== userSelectedId) {
        dispatch({type: appReducerTypes.SET_USER_SELECTED, payload: user});
        dispatch({
          type: appReducerTypes.SET_USER_SELECTED_ID,
          payload: user.id,
        });
      } else {
        dispatch({type: appReducerTypes.SET_USER_SELECTED, payload: null});
        dispatch({type: appReducerTypes.SET_USER_SELECTED_ID, payload: null});
      }
    }
  };

  const renderItem = ({item}) => {
    return (
      <UserItem
        key={item.id}
        userData={item}
        idSelected={userSelectedId}
        onSelectUser={onSelectUser}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={users}
          renderItem={renderItem}
          initialNumToRender={10}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={Separator}
          ListFooterComponentStyle={styles.listBottomMargin}
          style={styles.list}
        />
      </SafeAreaView>
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 20,
    // marginBottom: 50,
  },
  listBottomMargin: {
    marginBottom: normalize(50),
  },
});
