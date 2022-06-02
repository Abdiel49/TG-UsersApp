import {StyleSheet, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import ImageView from 'react-native-image-viewing';

import normalize from '../../helpers/Dimensions/normalize';

const ImageViewComponent = ({
  imageURL,
  imagesArray,
  styleImage,
  styleContainer,
  fullShow = true,
}) => {
  const [viewImage, setViewImage] = useState(false);
  const uriImage = {uri: imageURL};
  const images = imageURL ? [uriImage] : imagesArray;

  const onShowImage = () => {
    if (fullShow) {
      setViewImage(true);
    }
  };

  const onCloseImage = () => {
    setViewImage(false);
  };

  return (
    <Pressable onPress={onShowImage}>
      <ImageView
        images={images}
        imageIndex={0}
        visible={viewImage}
        onRequestClose={onCloseImage}
      />
      <Image source={uriImage} style={styles.image} />
    </Pressable>
  );
};

export default ImageViewComponent;

const styles = StyleSheet.create({
  image: {
    width: normalize(50),
    height: normalize(50),
  },
});
