import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';

import ImageViewComponent from '../atoms/ImageViewComponent';

import {photosServices} from '../../api/photosServices';
import {colors} from '../../styles/colors';
import TextBase from '../atoms/TextBase';
import normalize from '../../helpers/Dimensions/normalize';

const PostItem = ({post}) => {
  // console.log('post item', post);
  const [loading, setLoading] = useState(true);
  const [photoData, setPhotoData] = useState(null);

  const getPhotoData = useCallback(async () => {
    setLoading(true);
    const photo = await photosServices({postId: post.id});
    // console.log('request photo data', photo);
    if (photo) {
      setPhotoData(photo[0]);
    }
    setLoading(false);
  }, [post.id]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getPhotoData();
    }
    return () => {
      isMounted = false;
    };
  }, [getPhotoData]);

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6}>
      {!photoData || loading ? (
        <ActivityIndicator size={'large'} color={colors.acction} />
      ) : (
        <ImageViewComponent
          imageURL={photoData.thumbnailUrl}
          imageStyle={styles.image}
        />
      )}
      <View style={styles.body}>
        {post && post.title && (
          <TextBase style={styles.title} text={post.title} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.8,
    borderColor: colors.grey,
    flexDirection: 'row',
  },
  body: {
    flexShrink: 1,
    paddingVertical: 10,
  },
  title: {
    marginLeft: 10,
    flexShrink: 1,
    // alignSelf: 'center',
  },
  imageContainer: {
    position: 'absolute',
  },
  image: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: 10,
    margin: 1,
  },
});
