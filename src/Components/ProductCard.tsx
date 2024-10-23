import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import AppText from './AppText';
import Colors from '../Services/Colors';
import AppImage from './AppImage';
import {Product} from '../Services/Api/listings';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {ParamList} from '../Services/Navigation';

/**
 * ProductCard component.
 *
 * A component that displays a product card with its preve details.
 *
 * @param {ProductCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */

const ProductCard = ({
  id,
  title,
  description,
  thumbnail,
  price,
  stock,
  reviews,
  brand,
  discountPercentage,
  images,
  category,
}: Product) => {
  const navigation = useNavigation<NavigationProp<ParamList>>();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate('productsDetails', {
          id,
          title,
          description,
          thumbnail,
          price,
          stock,
          reviews,
          brand,
          discountPercentage,
          images,
          category,
        })
      }>
      <AppImage source={{uri: thumbnail}} style={styles.thumnail} />
      <View style={styles.informationContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText
          style={styles.discription}
          numberOfLines={2}
          ellipsizeMode="tail">
          {description}
        </AppText>
        <View style={styles.priceContainer}>
          <AppText style={styles.price}>{price}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const {width} = Dimensions.get('window');

/**
 * Styles for the ProductCard component.
 */
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: width - 40,
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  informationContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  title: {
    color: Colors.primary,
    fontSize: 18,
  },
  discription: {
    color: Colors.lightText,
    fontSize: 16,
  },
  thumnail: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  price: {
    color: Colors.primary,
    fontSize: 16,
  },
});

export default ProductCard;
