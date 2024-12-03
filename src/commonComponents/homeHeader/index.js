
import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import { Icons } from "../../utils/icons";

interface HomeHeaderProps {
  navigation: any;
  toogle: () => void; 
}

export function HomeHeader({ navigation, toogle }: HomeHeaderProps) {

  return (
    <View style={[styles.mainView]}>
      <View style={[styles.view]}>
        <TouchableOpacity onPress={toogle}>
          <Icons.category />
        </TouchableOpacity>
        <Image source={images.fastkart} style={[styles.logoImg]} />
      </View>
      <View style={[styles.view]}>
        <Icons.location />
        <Text style={[styles.locationText]}>Los Angeles</Text>
        <Image source={images.demoProfile} style={[styles.profile]} resizeMode="contain" />
      </View>
    </View>
  );
}
