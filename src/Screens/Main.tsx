import {Image, StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainer from '../Components/ScreenContainer';
import AppButton from '../Components/AppButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamList} from '../Services/Navigation';

type ProductSearchNavigationProp = StackNavigationProp<
  ParamList,
  'productsSearch'
>;

interface Props {
  navigation: ProductSearchNavigationProp;
}

const Main: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenContainer style={styles.container}>
      <Image source={require('../Images/logo.png')} style={styles.logo} />
      <AppButton
        style={styles.btn}
        title="start"
        onPress={() => navigation.navigate('productsSearch')}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 170,
    height: 176,
    resizeMode: 'contain',
    marginTop: 80,
  },
  btn: {
    marginVertical: 60,
  },
});

export default Main;
