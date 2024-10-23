import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TextInputProps,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import Colors from '../Services/Colors';

/**
 * Props for the AppTextInput component.
 */
interface Props extends TextInputProps {
  /** The source of the icon image. */
  icon: ImageSourcePropType;
  /** Custom styles to be applied to the container view. */
  style?: ViewStyle;
}

/**
 * AppTextInput component.
 *
 * A customizable text input component for React Native applications.
 * It supports an optional icon and allows for additional styling through props.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const AppTextInput = ({icon, style, ...otherProps}: Props) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput style={styles.textInput} {...otherProps} />
      {icon && <Image source={icon} style={styles.icon} />}
    </View>
  );
};

/**
 * Styles for the AppTextInput component.
 */
const styles = StyleSheet.create({
  container: {
    borderColor: Colors.borderColor,
    backgroundColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 7,
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 5,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 5,
    color: Colors.darkText,
  },
});

export default AppTextInput;
