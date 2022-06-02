import {View, SafeAreaView, FlatList} from 'react-native';
import React, {useContext} from 'react';

import UserItem from '../molecules/UserItem';
import Separator from '../atoms/Separator';
import AppContext from '../../context/AppContext';
import {appReducerTypes} from '../../reducers/appReducerTypes';

const mockdata = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

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
    <View>
      <SafeAreaView>
        <FlatList
          data={users || mockdata}
          renderItem={renderItem}
          initialNumToRender={10}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    </View>
  );
};

export default UsersList;
