import {View, StyleSheet} from 'react-native';
import React from 'react';
import AppText from './AppText';
import Colors from '../Services/Colors';

// Define the props interface
interface Props {
  title: string;
  content: string;
}

const AboutSegment = ({title, content}: Props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.content}>{content}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    color: Colors.primary,
    fontSize: 18,
    lineHeight: 24,
  },
  content: {
    color: Colors.darkText,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutSegment;
