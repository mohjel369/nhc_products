import React from 'react';
import {Text, TextProps, StyleSheet, TextStyle} from 'react-native';
import Colors from '../Services/Colors';

/**
 * Props for the AppText component.
 */
interface Props extends TextProps {
  /** Custom styles to be applied to the text. */
  style?: TextStyle;
}

/**
 * AppText component.
 *
 * A customizable text component for React Native applications.
 *
 * @param {AppTextProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const AppText = ({style, children, ...otherProps}: Props) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

/**
 * Styles for the AppText component.
 */
const styles = StyleSheet.create({
  text: {
    color: Colors.darkText,
    fontSize: 16,
  } as TextStyle,
});

export default AppText;
