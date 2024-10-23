/**
 * AppTextRoboto.tsx
 *
 * This file defines a reusable AppTextRoboto component that wraps its children in a Text component
 * used for buttons.
 */
import {View, Text, StyleSheet, TextStyle} from 'react-native';
import React, {ReactNode} from 'react';

/**
 * Props
 *
 * This interface defines the props for the AppTextRoboto component.
 * - children: The content to be displayed within the Text component.
 * - style: Optional custom styles to be applied to the Text component.
 */

interface Props {
  children: ReactNode;
  style?: TextStyle;
}

/**
 * AppTextRoboto
 *
 * This functional component represents a Text component with Roboto font styling.
 * It renders a Text component containing its children and applies the specified styles.
 *
 * @param {Props} props - The props for the AppTextRoboto component.
 * @returns {JSX.Element} The rendered AppTextRoboto component.
 */

const AppTextRoboto = ({children, style}: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

/**
 * styles
 *
 * This StyleSheet defines the styles used in the AppTextRoboto component.
 * - text: Sets the font size to 28 and applies the Roboto font family.
 */

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});

export default AppTextRoboto;
