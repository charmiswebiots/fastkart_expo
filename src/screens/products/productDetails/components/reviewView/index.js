import React from "react";
import { View,Text,TouchableOpacity,Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import appColors from "../../../../../theme/appColors";
import { reviewList,reviewStar } from "../../../../data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function ReviewView(props) {
    const {colors}=useTheme()
    const {viewRtlStyle,textRtlStyle}=useValues()
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} style={[styles.reviewView,{flexDirection:viewRtlStyle}]} onPress={props.visibleReviewModal}>
                <Text style={[styles.txt,{color:colors.text}]}>Product Review(15)</Text>
                <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
            <View style={styles.list}>
                {reviewList.splice(0, 2).map((item) =>
                    <View style={[styles.review, {
                        backgroundColor: appColors.gray,
                    }]}>
                        <View style={[styles.reviewDetail,{flexDirection:viewRtlStyle}]}>
                            <Image source={images.demoProfile} style={styles.demoProfile} />
                            <View style={styles.reviewNameViewRight}>
                                <Text style={[styles.reviewName]}>{item.reviewName}</Text>
                                <View style={{ flexDirection: viewRtlStyle }}>
                                    {reviewStar.map((item, key) =>
                                        <Image source={key === 4 ? images.star1 : images.star} style={styles.star} />
                                    )}
                                </View>
                            </View>
                        </View>
                        <Text style={[styles.reviewTxt,{textAlign:textRtlStyle}]}>{item.review}</Text>
                    </View>
                )}
            </View>
        </View>
    )
}