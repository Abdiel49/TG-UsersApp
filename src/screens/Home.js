import {StyleSheet, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';

import SearchInput from '../components/molecules/search/SearchInput';
import Button from '../components/atoms/Button';
import LoadingView from '../components/atoms/LoadingView';
import UsersList from '../components/organisms/UsersList';

import {getUserList} from '../api/userServices';

import {colors} from '../styles/colors';
import normalize from '../helpers/Dimensions/normalize';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

  const getData = useCallback(async () => {
    setLoading(true);
    const usersData = await getUserList();
    console.log('users from api', usersData);
    setUsers(usersData);
    setLoading(false);
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      // getData();
    }
    return () => {
      isMounted = false;
    };
  }, [getData]);

  return (
    <View style={styles.container}>
      <SearchInput />
      {loading && <LoadingView />}
      <View style={styles.usersContent}>
        <UsersList users={users} />
      </View>
      <View style={styles.putIn}>
        <Button label="Ingresar" />
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
  usersContent: {
    marginHorizontal: normalize(20),
  },
});
