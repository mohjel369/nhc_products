import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import AppText from './AppText';
import Colors from '../Services/Colors';

/**
 * Props for the DetailsSegemnt component.
 */
interface Props {
  /** The subtitle to be displayed. */
  subTitle: string;
  /** The content to be displayed. */
  content: string | ReactNode;
}

/**
 * DetailsSegemnt component.
 *
 * A component that displays a subtitle and content in a row.
 *
 * @param {DetailsSegmentProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const DetailsSegemnt = ({subTitle, content}: Props) => {
  return (
    <View style={styles.textContainer}>
      <AppText style={styles.subTitle}>{subTitle}: </AppText>
      <AppText style={styles.content}>{content}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
  },
  subTitle: {
    color: Colors.primary,
    fontSize: 18,
  },
  content: {
    color: Colors.darkText,
    fontSize: 18,
  },
});

export default DetailsSegemnt;
