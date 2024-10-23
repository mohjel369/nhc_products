import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import AppText from './AppText';
import Colors from '../Services/Colors';

/**
 * NoResults component.
 *
 * A component that displays a message indicating that no search results were found.
 *
 * @returns {JSX.Element} The rendered component.
 */

const NoResults = () => {
  return (
    <View style={styles.ScreenContainer}>
      <Image source={require('../Images/search_result_icon.png')} />
      <AppText style={styles.text}>
        No results for your search!{'\n'}
        Try another keyword
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    width: '100%',
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    color: Colors.lightText,
    fontSize: 18,
    lineHeight: 30,
    marginTop: 20,
  },
});

export default NoResults;
