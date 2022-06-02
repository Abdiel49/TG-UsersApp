import {StyleSheet, View} from 'react-native';
import React, {useState, useContext} from 'react';

import LoadingView from '../components/atoms/LoadingView';
import AppContext from '../context/AppContext';
import PostList from '../components/organisms/PostList';

import {colors} from '../styles/colors';
const PostsScreen = () => {
  const [loading, setLoading] = useState(false);
  const {state} = useContext(AppContext);
  // console.log('posts cliente selected id: ', userSelectedId);
  // console.log('posts cliente selected: ', userSelected);
  const posts = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
  ];
  return (
    <View style={styles.container}>
      {loading && <LoadingView />}
      {!loading && <PostList postsList={posts} />}
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
