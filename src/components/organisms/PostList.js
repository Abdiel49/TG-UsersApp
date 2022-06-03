import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import PostItem from '../molecules/PostItem';
import Separator from '../atoms/Separator';

const PostList = ({postsList}) => {
  const renderItem = ({item}) => {
    return <PostItem key={item.id} post={item} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        renderItem={renderItem}
        data={postsList}
        ItemSeparatorComponent={Separator}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
};

export default PostList;

const styles = StyleSheet.create({
  flatList: {
    paddingHorizontal: 20,
  },
});
