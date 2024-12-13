import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { reviewStar } from "../../../../data";
import images from "../../../../../utils/images";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function NameView() {
    const { colors } = useTheme()
    const { viewRtlStyle, textRtlStyle ,t,currSymbol,currValue} = useValues()
    return (
        <View>
            <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('productDetailsPage.productName')}</Text>
            <View style={[styles.ratingsView, { flexDirection: viewRtlStyle }]}>
                <View style={{ flexDirection: viewRtlStyle }}>
                    {reviewStar.map((item, key) =>
                        <Image source={key === 4 ? images.star1 : images.star} style={styles.star} key={item.id} />
                    )}
                </View>
                <Text style={[styles.ratings]}>{t('productDetailsPage.productRatings')}</Text>
            </View>
            <View style={[{ flexDirection: viewRtlStyle }]}>
                <Text style={[styles.txt, { color: colors.text }]}>{currSymbol}{(25 * currValue).toFixed(2)}</Text>
                <Text style={styles.originalPrice}>{currSymbol}{(45 * currValue).toFixed(2)}</Text>
                <Text style={styles.discount}>{t('productDetailsPage.productDiscount')}</Text>
            </View>
        </View>
    );
}
