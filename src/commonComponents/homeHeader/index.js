
import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";

interface HomeHeaderProps {
  navigation: any;
  toogle: () => void; 
}

export function HomeHeader({ navigation, toogle }: HomeHeaderProps) {

  const {isDark}=useValues()
  const {colors}=useTheme()

  return (
    <View style={[styles.mainView]}>
      <View style={[styles.view]}>
        <TouchableOpacity onPress={toogle}>
          <Icons.category />
        </TouchableOpacity>
        <Image source={isDark?images.fastKartDark:images.fastkart} style={[styles.logoImg]} />
      </View>
      <View style={[styles.view]}>
        <Icons.location />
        <Text style={[styles.locationText,{color:colors.text}]}>Los Angeles</Text>
        <Image source={images.demoProfile} style={[styles.profile]} resizeMode="contain" />
      </View>
    </View>
  );
}
