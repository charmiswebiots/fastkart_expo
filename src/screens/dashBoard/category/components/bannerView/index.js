import { View, Image, Text } from "react-native";
import React from "react";
import styles from "./styles";
import images from "../../../../../utils/images";
import { useValues } from "../../../../../utils/context";
import { windowHeight } from "../../../../../theme/appConstant";

export function BannerView() {
    const { textRtlStyle, rtl } = useValues();

    return (
        <View
            style={[
                styles.view,
                rtl
                    ? { left: windowHeight(130) } 
                    : { right: windowHeight(130) }, 
            ]}
        >
            <Image
                style={[
                    styles.bannerImg,
                    {
                        transform: [{ scaleX: rtl ? -1 : 1 }], 
                    },
                ]}
                source={images.banner1}
            />
            <View style={styles.contentView}>
                <Text style={[styles.title, { textAlign: textRtlStyle }]}>
                    Farm Fresh Vegies
                </Text>
                <Text style={[styles.subTitle, { textAlign: textRtlStyle }]}>
                    Get instant delivery
                </Text>
            </View>
        </View>
    );
}
 