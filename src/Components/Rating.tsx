import {View, Image, StyleSheet, ViewStyle, ImageStyle} from 'react-native';
import React, {useEffect, useState} from 'react';

/**
 * Props for the Rating component.
 */
interface Props {
  /** Array of rating data. */
  data: {rating: number}[];
}

/**
 * Rating component.
 *
 * A component that displays a star rating based on the provided data.
 *
 * @returns {JSX.Element} The rendered component.
 */
const Rating = ({data}: Props) => {
  const [starsArray, setStarsArray] = useState<number[]>([]);

  useEffect(() => {
    calculateRating();
    return () => {
      setStarsArray([]);
    };
  }, [data]);

  /**
   * Calculates the average rating and fills the stars array.
   */
  const calculateRating = () => {
    let total = 0;
    data.forEach(item => {
      total += Number(item.rating);
    });
    fillStarsArray(Math.round(total / data.length));
  };

  /**
   * Fills the stars array based on the rating.
   *
   * @param {number} n - The number of stars to fill.
   */
  const fillStarsArray = (n: number) => {
    const arr = Array(5).fill(0);
    for (let i = 0; i < n; i++) {
      arr[i] = 1;
    }
    console.log('Stars array:', arr);
    setStarsArray(arr);
  };

  return (
    <View style={styles.container}>
      {starsArray.map((item, index) =>
        item === 1 ? (
          <Image
            source={require('../Images/start.png')}
            style={styles.star}
            key={index}
          />
        ) : (
          <Image
            source={require('../Images/greyStart.png')}
            style={styles.star}
            key={index}
          />
        ),
      )}
    </View>
  );
};

/**
 * Styles for the Rating component.
 */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  star: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  } as ImageStyle,
});

export default Rating;
