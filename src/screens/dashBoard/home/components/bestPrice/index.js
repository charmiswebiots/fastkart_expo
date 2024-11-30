import React from "react";
import { View ,TouchableOpacity,Image,Text,ScrollView} from "react-native";
import { bestPrice } from "../../../../data";
import styles from "./styles";
import { SeeAllHeader } from "../seeAllHeader";
import { Icons } from "../../../../../utils/icons";
import { windowHeight,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

export function BestPrice({props,headerData,onPress}) {
    return (
        <View style={styles.mainView}>
            <SeeAllHeader  {...headerData} />
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    bestPrice.map((item, key) =>
                        <TouchableOpacity key={key} style={styles.lowestPriceView} activeOpacity={0.8} onPress={onPress}>
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