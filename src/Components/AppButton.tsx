import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import Colors from '../Services/Colors';
import AppTextRoboto from './AppTextRoboto';

/**
 * Props for the AppButton component.
 */
interface Props extends TouchableOpacityProps {
  /** The text to be displayed on the button. */
  title: string;
  /** Custom styles to be applied to the button. */
  style?: ViewStyle;
  /** The function to be called when the button is pressed. */
  onPress: () => void;
}

/**
 * AppButton component.
 *
 * A customizable button component for React Native applications.
 * It extends the TouchableOpacity component and allows for additional
 * styling and functionality through props. The button displays a text
 * label and handles press events.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */

const AppButton = ({title, style, onPress, ...otherProps}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      {...otherProps}>
      <AppTextRoboto style={styles.label}>{title}</AppTextRoboto>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 7,
  },
  label: {
    textTransform: 'uppercase',
    color: Colors.white,
  },
  loader: {
    marginVertical: 5,
  },
});

export default AppButton;
