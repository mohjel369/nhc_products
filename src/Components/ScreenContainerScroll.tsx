/**
 * ScreenContainer.tsx
 *
 * This file defines a reusable ScreenContainer component that wraps its children in a SafeAreaView
 * to wrap pages.
 */

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  ViewStyle,
  ScrollView,
} from 'react-native';
import React, {ReactNode} from 'react';
import Colors from '../Services/Colors';

/**
 * Props
 *
 * This interface defines the props for the ScreenContainer component.
 * - children: The content to be displayed within the screen.
 * - style: Optional custom styles to be applied to the screen's container.
 */

interface Props {
  children: ReactNode;
  style?: ViewStyle;
}

/**
 * ScreenContainerScroll
 *
 * This functional component wraps its children in a SafeAreaView and applies consistent styling.
 * It also sets the status bar style to dark-content.
 *
 * @param {Props} props - The props for the ScreenContainer component.
 * @returns {JSX.Element} The rendered ScreenContainer component.
 */

const ScreenContainerScroll: React.FC<Props> = ({children, style}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.screen, style]}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
};

/**
 * styles
 *
 * This StyleSheet defines the styles used in the ScreenContainer component.
 * - screen: Sets the flex property to 1 to make the screen take up the full available space.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  screen: {
    flex: 1,
  },
});

export default ScreenContainerScroll;
