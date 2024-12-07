import { View,ScrollView ,Image,Text,TouchableOpacity} from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { lowestPrice } from "../../../../data";
import { SeeAllHeader } from "../seeAllHeader";
import { windowHeight,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function LowestPrice({headerData,onPress,style}) {
    const { colors}=useTheme()
    const {viewRtlStyle,textRtlStyle}=useValues()
    return (
        <View style={styles.mainView}>
            <SeeAllHeader  {...headerData} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    lowestPrice.map((item, key) =>
                        <TouchableOpacity key={key} style={[styles.lowestPriceView,style]} activeOpacity={0.8} onPress={onPress} >
                            <Image resizeMode='contain' source={item.image} style={styles.image} />
                            <Text style={[styles.name,{color:colors.text},{textAlign:textRtlStyle}]} numberOfLines={2}>{item.name}</Text>
                            <Text style={[styles.gram,{textAlign:textRtlStyle}]}>{item.weight}</Text>
                            <View style={[styles.priceView,{flexDirection:viewRtlStyle}]}>
                                <Text style={[styles.price,{color:colors.text}]}>{item.price}</Text>
                                <View style={styles.increase}>
                                    <Icons.increase height={windowHeight(18)} width={windowWidth(18)} color={appColors.white} />
                                </View>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} style={styles.wishList}>
                                <Icons.wishlist />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </View>
    )
}