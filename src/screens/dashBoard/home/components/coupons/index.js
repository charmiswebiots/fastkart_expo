import React from "react";
import { View, ScrollView, Image, Text, ImageBackground } from "react-native";
import styles from "./styles";
import { SeeAllHeader } from "../seeAllHeader";
import { coupons } from "../../../../data";
import images from "../../../../../utils/images";
import { useValues } from "../../../../../utils/context";
import appColors from "../../../../../theme/appColors";
import { useNavigation, useTheme } from "@react-navigation/native";

export function Coupons() {

    const navigation=useNavigation()
    const {isDark,viewRtlStyle,t,currSymbol,currValue}=useValues()
    const {colors}=useTheme()

    const offers=()=>{
        navigation.navigate('Offers')
    }
    return (
        <View style={[styles.mainView,{backgroundColor:isDark?colors.primary:appColors.drawer}]}>
            <SeeAllHeader title={t('homepage.couponsForYou')} subtitle={t('homepage.popularOffer')} onPress={offers}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{flexDirection:viewRtlStyle}}>
                {
                    coupons.map((item, key) =>
                        <ImageBackground
                            key={key}
                            source={
                                isDark
                                    ? key === 0
                                        ? images.offerBG1Dark
                                        : key === 1
                                            ? images.offerBG2Dark
                                            : images.offerBG3Dark
                                    : key === 0
                                        ? images.offerBG1
                                        : key === 1
                                            ? images.offerBG2
                                            : images.offerBG3
                            }
                            resizeMode='cover'
                            style={[styles.dataView]}
                        >
                            <Image source={item.icon} resizeMode='contain' style={styles.image} />
                            <Text style={styles.discount}>{item.discount}% {t('cartlist.off')}</Text>
                            <Text style={styles.upto}>{t('notificationPage.upto')} {currSymbol}{(currValue * 20).toFixed(2)}</Text>
                        </ImageBackground>
                    )
                }
            </ScrollView>
        </View>
    );
}
