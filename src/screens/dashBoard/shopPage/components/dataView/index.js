import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { data } from "../../../../data";
import { Counter } from "../../../../../commonComponents";
import images from "../../../../../utils/images";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";

export function DataView() {

    const {isDark,viewRtlStyle,textRtlStyle,t,currSymbol,currValue}=useValues()
    const {colors}=useTheme()

    return (
        <View style={styles.container}>
            {data.map((item, key) => (
                key === 3 ? (
                    <Image key={key} source={images.categoryBanner} style={styles.img} />
                ) : (
                    <View key={key} style={[styles.mainView,{backgroundColor:isDark?colors.primary:appColors.gray},{flexDirection:viewRtlStyle}]}>
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                        <View style={styles.lineView} />
                        <View style={styles.counterView}>
                            <TouchableOpacity onPress={item.onPress} activeOpacity={0.7}>
                                <Text style={[styles.name,{color:colors.text},{textAlign:textRtlStyle}]}>{t(item.name)}</Text>
                                <Text style={[styles.weight,{textAlign:textRtlStyle}]}>{t(item.weight)}</Text>
                            </TouchableOpacity>
                            <View style={[styles.priceView,{flexDirection:viewRtlStyle}]}>
                                <View style={[styles.discountPriceView,{flexDirection:viewRtlStyle}]}>
                                    <Text style={[styles.price,{color:colors.text}]}>{currSymbol}{(item.price * currValue).toFixed(2)}</Text>
                                    <View style={[styles.discountView,{flexDirection:viewRtlStyle}]}>
                                        <Text style={styles.discount}>{item.discount}% </Text>
                                        <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
                                    </View>
                                </View>
                                <Counter />
                            </View>
                        </View>
                    </View>
                )
            ))}
        </View>
    );
}
