import {View, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import AppText from '../Components/AppText';
import Colors from '../Services/Colors';
import ScreenContainerScroll from '../Components/ScreenContainerScroll';
import DetailsSegemnt from '../Components/DetailsSegemnt';
import Rating from '../Components/Rating';
import ProductImages from '../Components/ProducImages';
import AppImage from '../Components/AppImage';
import {RouteProp} from '@react-navigation/native';
import {ParamList} from '../Services/Navigation';

/**
 * Props for the ProductsDetails component.
 */
interface Props {
  route: RouteProp<ParamList, 'productsDetails'>;
}

/**
 * ProductsDetails component.
 *
 * A component that displays detailed information about a product.
 *
 * @param  props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const ProductsDetails = ({route}: Props) => {
  return (
    <ScreenContainerScroll>
      <View style={styles.container}>
        <AppText style={styles.title}>{route.params.title}</AppText>
        <AppImage
          source={{uri: route.params.thumbnail}}
          style={styles.thumnail}
        />
        <View style={styles.stockContainer}>
          <DetailsSegemnt subTitle="Stock" content={route.params.stock} />
          <DetailsSegemnt subTitle="Price" content={route.params.price} />
        </View>

        <DetailsSegemnt
          subTitle="Rating"
          content={<Rating data={route.params.reviews} />}
        />
        <DetailsSegemnt subTitle="Brand" content={route.params.brand} />
        <DetailsSegemnt
          subTitle="Discount Percentage"
          content={route.params.discountPercentage}
        />
        <DetailsSegemnt subTitle="Category" content={route.params.category} />

        <AppText style={styles.subTitle}>Product Description</AppText>
        <AppText style={styles.content}>{route.params.description}</AppText>
      </View>

      {route.params.images.length && (
        <ProductImages images={route.params.images} />
      )}
    </ScreenContainerScroll>
  );
};

/**
 * Styles for the ProductsDetails component.
 */

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    color: Colors.primary,
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
  },
  thumnail: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,
    borderRadius: 15,
  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    color: Colors.darkText,
    fontSize: 18,
    marginTop: 15,
  },
  content: {
    color: Colors.darkText,
    fontSize: 18,
  },
});

export default ProductsDetails;
