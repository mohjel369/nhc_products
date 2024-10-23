import React, {useState} from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import Colors from '../Services/Colors';

/**
 * Props for the AppImage component.
 */
interface Props {
  /** The source of the image. */
  source: {uri: string} | number;
  /** Custom styles to be applied to the image. */
  style?: StyleProp<ImageStyle>;
}

/**
 * AppImage component.
 *
 * A customizable image component for React Native applications.
 * It displays an image and shows a loading background color until the image is fully loaded.
 *
 * @param {AppImageProps} props - The props for the component.
 * @returns {JSX.Element} The rendered component.
 */
const AppImage = ({source, style}: Props) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Image
        source={source}
        style={[
          {backgroundColor: loading ? Colors.lightText : 'transparent'},
          style,
        ]}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default AppImage;
