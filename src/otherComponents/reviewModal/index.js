import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";
import images from "../../utils/images";
import { reviewList } from "../../screens/data";
import { Icons } from "../../utils/icons";
import { reviewStar } from "../../screens/data";

export function ReviewModal(props) {
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: appColors.white, flex: 1 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: appColors.black, fontFamily: 'mulishSemiBold', fontSize: fontSizes.FONT20 }}>All Review</Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Icons.into width={windowWidth(44)} height={windowHeight(44)} />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ height: windowHeight(300) }} showsVerticalScrollIndicator={false}>
                {reviewList.map((item) =>
                    <View style={[styles.review, {
                        backgroundColor: appColors.gray,
                    }]}>
                        <View style={[styles.reviewDetail]}>
                            <Image source={images.demoProfile} style={styles.demoProfile} />
                            <View style={[styles.reviewName]}>
                                <Text style={[styles.reviewName]}>{item.reviewName}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    {reviewStar.map((item, key) =>
                                        <Image source={key === 4 ? images.star1 : images.star} style={styles.star} />
                                    )}
                                </View>
                            </View>
                        </View>
                        <Text style={[styles.reviewTxt]}>{item.review}</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}