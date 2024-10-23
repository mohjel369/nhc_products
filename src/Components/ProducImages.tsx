import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import AppText from './AppText';
import Colors from '../Services/Colors';
import AppImage from './AppImage';

/**
 * Props for the ProductImages component.
 */
interface Props {
  /** Array of image URLs. */
  images: string[];
}

/**
 * ProductImages component.
 *
 * A component that displays a list of product images in a horizontal scrollable view.
 *
 * @param {ProductImagesProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const ProductImages = ({images}: Props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.subTitle}>Product Images</AppText>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <AppImage key={index} source={{uri: item}} style={styles.image} />
        )}
      />
    </View>
  );
};

/**
 * Styles for the ProductImages component.
 */

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginBottom: 40,
  },
  image: {
    width: 130,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  subTitle: {
    color: Colors.darkText,
    fontSize: 18,
    marginTop: 15,
    paddingBottom: 10,
  },
});

export default ProductImages;
