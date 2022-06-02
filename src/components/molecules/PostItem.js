import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';

import ImageViewComponent from '../atoms/ImageViewComponent';

import {colors} from '../../styles/colors';

const PostItem = ({post}) => {
  // console.log('post item', post);
  const [loading, setLoading] = useState(true);
  const [photoData, setPhotoData] = useState(null);

  // const getPhotoData = useCallback(async () => {

  //   },
  //   [],
  // );

  const thumbnailUrl = 'https://via.placeholder.com/150/92c952';
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color={colors.acction} />
      ) : (
        <ImageViewComponent imageURL={thumbnailUrl} />
      )}
      {post && post.title && <Text style={styles.title}>{post.title}</Text>}
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: colors.grey,
    flexDirection: 'row',
    flexShrink: 1,
  },
  title: {
    marginLeft: 10,
    flexShrink: 1,
  },
});
