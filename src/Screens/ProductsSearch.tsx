import {
  View,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  ActivityIndicator,
  Platform,
  ListRenderItem,
} from 'react-native';
import React, {useEffect, useState, useCallback, useMemo, memo} from 'react';
import ScreenContainer from '../Components/ScreenContainer';
import AppText from '../Components/AppText';
import Colors from '../Services/Colors';
import AppTextInput from '../Components/AppTextInput';
import {getListings} from '../Services/Api/listings';
import ProductCard from '../Components/ProductCard';
import AppButton from '../Components/AppButton';
import NoResults from '../Components/NoResults';
import {Product} from '../Services/Api/listings';

/**
 * ProductsSearch component.
 *
 * A component that allows users to search for products by keywords.
 *
 * @returns {JSX.Element} The rendered component.
 */
const ProductsSearch = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const controller = new AbortController();

  useEffect(() => {
    loadListings('', controller.signal);

    //Cleanup function to cancel the fetch request
    return () => {
      controller.abort();
    };
  }, []);

  /**
   * Loads the product listings.
   *
   * @param {string} searchText - The search text.
   * @param {AbortSignal} signal - The abort signal to cancel the fetch request.
   */
  const loadListings = useCallback(
    async (searchText: string, signal: AbortSignal) => {
      setLoading(true);
      try {
        const response = await getListings(signal, searchText);
        setProducts(response.products);
        setLoading(false);
        setError(false);
      } catch (error) {
        console.log('Error:', error);
        setLoading(false);
        setError(true);
      }
    },
    [],
  );

  /**
   * Renders a product item.
   *
   * @param {object} param0 - The item to render.
   * @returns {JSX.Element} The rendered product card.
   */
  const renderItem: ListRenderItem<Product> = ({item}) => {
    const productProps: Product = {
      id: item.id,
      title: item.title,
      description: item.description,
      thumbnail: item.thumbnail,
      price: `${item.price} $`,
      stock: item.stock,
      reviews: item.reviews,
      brand: item.brand,
      discountPercentage: item.discountPercentage,
      images: item.images,
      category: item.category,
    };

    return <ProductCard key={item.id} {...productProps} />;
  };

  const memoizedProducts = useMemo(() => products, [products]);

  /**
   * Debounce function to prevent multiple API calls.
   *
   * @param {string} text - The search text*/
  const debounceFunction = (text: string) => {
    setTimeout(() => {
      loadListings(text, controller.signal);
    }, 500);
  };

  return (
    <ScreenContainer style={styles.ScreenContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.seachInputContainer}>
          <AppText style={styles.title}>Search products by keywords</AppText>
          <AppTextInput
            icon={require('../Images/search_icon.png')}
            placeholder="Enter Search Keywords"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={val => debounceFunction(val)}
          />
        </View>
        {error && !products.length && (
          <>
            <AppText style={styles.error}>
              Could not retrieve the products
            </AppText>
            <View style={styles.btnContainer}>
              <AppButton
                title="Retry"
                onPress={() => loadListings('', controller.signal)}
              />
            </View>
          </>
        )}

        {loading && (
          <ActivityIndicator color={Colors.primary} size="large" animating />
        )}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={memoizedProducts}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 30}}
        />
        {!products.length && !loading && !error && <NoResults />}

        <View style={styles.totalResultsContainer}>
          <AppText style={styles.totalResultsText}>
            Total results count:{' '}
          </AppText>
          <AppText style={styles.totalResultsNumber}>{products.length}</AppText>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

/**
 * Styles for the ProductsSearch component.
 */

const styles = StyleSheet.create({
  ScreenContainer: {
    paddingTop: 20,
  },
  title: {
    color: Colors.primary,
    fontSize: 18,
    marginVertical: 10,
  },
  seachInputContainer: {
    marginHorizontal: 20,
  },
  error: {
    width: '100%',
    paddingVertical: 20,
    textAlign: 'center',
  },
  btnContainer: {
    paddingHorizontal: 20,
  },
  totalResultsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  totalResultsText: {
    color: Colors.darkText,
    fontSize: 18,
  },
  totalResultsNumber: {
    color: Colors.primary,
    fontSize: 18,
  },
});

export default memo(ProductsSearch);
