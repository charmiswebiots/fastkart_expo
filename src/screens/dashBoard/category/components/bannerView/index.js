import { View,Image ,Text} from "react-native";
import React from "react";
import styles from "./styles";
import images from "../../../../../utils/images";

export function BannerView(){
    return(
        <View style={styles.view}>
            <Image style={[styles.bannerImg, {
                transform: [{ scaleX:1 }]
            }]} source={images.banner1} />
            <View style={styles.contentView}>
                <Text style={[styles.title]}>Farm Fresh Vegies</Text>
                <Text style={[styles.subTitle]}>Get instant delivery</Text>
            </View>
        </View>
    )
}