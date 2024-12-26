import { View, Image, SafeAreaView } from "react-native";
import React, { FC, useEffect } from "react";
import styles from "./styles";
import images from "../../../utils/images";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

interface SplashProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export const Splash: FC<SplashProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const { isDark } = useValues();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
      <Image source={images.splash} style={{ width: '100%' }} />
      <View style={styles.logo}>
        <Image source={isDark ? images.fastKartDark : images.appLogo} style={styles.img} />
      </View>
    </SafeAreaView>
  );
}