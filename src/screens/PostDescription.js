import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {colors} from '../styles/colors';
import ImageViewComponent from '../components/atoms/ImageViewComponent';
import normalize from '../helpers/Dimensions/normalize';
import TextBase from '../components/atoms/TextBase';
import Separator from '../components/atoms/Separator';

const PostDescription = () => {
  const {params} = useRoute();
  const {photoData, post} = params;
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <ImageViewComponent
            imageURL={photoData.url}
            containerStyle={[styles.imageContainer, styles.image]}
            imageStyle={styles.image}
          />
          <TextBase text={post.title} style={styles.titlePost} />
          <Separator />
          <View style={styles.body}>
            <TextBase text={post.body} style={styles.bodyPost} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PostDescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  imageContainer: {
    alignSelf: 'center',
  },
  image: {
    width: normalize(250),
    height: normalize(250),
    borderRadius: 10,
  },
  titlePost: {
    fontSize: normalize(20),
    width: '80%',
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: normalize(18),
    textTransform: 'capitalize',
  },
  body: {
    width: '80%',
    marginHorizontal: '5%',
    marginVertical: normalize(18),
  },
  bodyPost: {
    fontSize: normalize(16),
    textTransform: 'capitalize',
    lineHeight: normalize(24),
  },
});
