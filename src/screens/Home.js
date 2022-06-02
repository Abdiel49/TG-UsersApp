import {StyleSheet, View} from 'react-native';
import React, {useState, useCallback, useEffect, useContext} from 'react';

import SearchInput from '../components/molecules/search/SearchInput';
import Button from '../components/atoms/Button';
import LoadingView from '../components/atoms/LoadingView';
import UsersList from '../components/organisms/UsersList';
import AppContext from '../context/AppContext';

import normalize from '../helpers/Dimensions/normalize';
import {getUserList} from '../api/userServices';
import {filterUsers} from '../helpers/filters/filterUsers';

import {colors} from '../styles/colors';
import {appReducerTypes} from '../reducers/appReducerTypes';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [usersData, setUsersData] = useState(null);

  const {state, dispatch} = useContext(AppContext);

  const getData = useCallback(async filter => {
    setLoading(true);
    const usersAPIData = await getUserList(filter);
    setUsers(usersAPIData);
    setUsersData(usersAPIData);
    setLoading(false);
    return usersAPIData;
  }, []);

  const handleEnter = () => {
    console.log('user selected id: ', state.userSelectedId);
    console.log('user selected: ', state.userSelected);
  };

  /* Get data when component is mounted */
  // current disabled because the logic app working
  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     getData();
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, [getData]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (usersData && usersData.length > 0) {
        const user = usersData[0];
        if (state.userSelectedId !== user.id) {
          dispatch({type: appReducerTypes.SET_USER_SELECTED, payload: user});
          dispatch({
            type: appReducerTypes.SET_USER_SELECTED_ID,
            payload: user.id,
          });
        }
      }
    }
    return () => {
      isMounted = false;
    };
  }, [usersData, dispatch, state.userSelectedId]);

  return (
    <View style={styles.container}>
      <SearchInput
        initialData={users}
        setFilteredData={setUsersData}
        filterFunction={filterUsers}
        requestDataAsync={getData}
      />
      {loading && <LoadingView />}
      <UsersList users={usersData} />
      <View style={styles.putIn}>
        <Button label="Ingresar" onPress={handleEnter} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  putIn: {
    position: 'absolute',
    bottom: normalize(15),
    alignSelf: 'center',
  },
});
