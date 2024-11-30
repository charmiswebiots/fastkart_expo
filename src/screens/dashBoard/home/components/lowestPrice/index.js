import { View,ScrollView ,Image,Text,TouchableOpacity} from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { lowestPrice } from "../../../../data";
import { SeeAllHeader } from "../seeAllHeader";
import { windowHeight,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";
import React from "react";

export function LowestPrice({props,headerData,onPress,style}) {
    return (
        <View style={styles.mainView}>
            <SeeAllHeader  {...headerData} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    lowestPrice.map((item, key) =>
                        <TouchableOpacity key={key} style={[styles.lowestPriceView,style]} activeOpacity={0.8} onPress={onPress} >
                            <Image resizeMode='contain' source={item.image} style={styles.image} />
                            <Text style={[styles.name]} numberOfLines={2}>{item.name}</Text>
                            <Text style={[styles.gram]}>{item.weight}</Text>
                            <View style={[styles.priceView]}>
                                <Text style={[styles.price]}>{item.price}</Text>
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