



import React, { FC } from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { useValues } from "../../../../../utils/context";

interface TitleViewProps {
  props: string;
}

export const TitleView: FC<TitleViewProps> = ({ props }) => {
  const { isDark, textRtlStyle, rtl } = useValues();
  return (
    <View>
      <Image 
        source={isDark ? images.fastKartDark : images.fastkart} 
        style={[styles.fastkartImg, { alignSelf: rtl ? 'flex-end' : 'flex-start' }]} 
      />
      <Text 
        style={[styles.online, { textAlign: textRtlStyle }, { alignSelf: rtl ? 'flex-end' : 'flex-start' }]}
      >
        {props}
      </Text>
    </View>
  );
}