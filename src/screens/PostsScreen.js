import {StyleSheet, View} from 'react-native';
import React, {useState, useContext, useEffect, useCallback} from 'react';

import LoadingView from '../components/atoms/LoadingView';
import AppContext from '../context/AppContext';
import PostList from '../components/organisms/PostList';

import {postsServices} from '../api/postsServices';

import {colors} from '../styles/colors';

const PostsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState(null);

  const {state} = useContext(AppContext);
  const {userSelectedId} = state;

  const requestPostsByUserId = useCallback(async () => {
    setLoading(true);
    const response = await postsServices({userId: userSelectedId});
    setPosts(response);
    setLoading(false);
  }, [userSelectedId]);

  useEffect(() => {
    requestPostsByUserId();
  }, [requestPostsByUserId]);

  return (
    <View style={styles.container}>
      {loading && <LoadingView />}
      {!loading && posts && <PostList postsList={posts} />}
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
