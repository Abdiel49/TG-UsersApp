import {StyleSheet, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';

import SearchInput from '../components/molecules/search/SearchInput';
import Button from '../components/atoms/Button';
import LoadingView from '../components/atoms/LoadingView';
import UsersList from '../components/organisms/UsersList';

import {getUserList} from '../api/userServices';

import {colors} from '../styles/colors';
import normalize from '../helpers/Dimensions/normalize';
import {filterUsers} from '../helpers/filters/filterUsers';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [usersData, setUsersData] = useState(null);

  const getData = useCallback(async () => {
    setLoading(true);
    const usersAPIData = await getUserList();
    console.log('users from api', usersAPIData);
    setUsers(usersAPIData);
    setUsersData(usersAPIData);
    setLoading(false);
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getData();
    }
    return () => {
      isMounted = false;
    };
  }, [getData]);

  return (
    <View style={styles.container}>
      <SearchInput
        initialData={users}
        setFilteredData={setUsersData}
        filterFunction={filterUsers}
      />
      {loading && <LoadingView />}
      <UsersList users={usersData} />
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
});
