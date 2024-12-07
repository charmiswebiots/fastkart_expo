import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import { reviewStar } from "../../../../data";
import images from "../../../../../utils/images";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function NameView() {
    const { colors } = useTheme()
    const { viewRtlStyle, textRtlStyle } = useValues()
    return (
        <View>
            <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>Assorted Capsicum Combo- (Red, Yellow, Green)</Text>
            <View style={[styles.ratingsView, { flexDirection: viewRtlStyle }]}>
                <View style={{ flexDirection: viewRtlStyle }}>
                    {reviewStar.map((item, key) =>
                        <Image source={key === 4 ? images.star1 : images.star} style={styles.star} key={item.id} />
                    )}
                </View>
                <Text style={[styles.ratings]}>(150 Ratings)</Text>
            </View>
            <View style={[{ flexDirection: viewRtlStyle }]}>
                <Text style={[styles.txt, { color: colors.text }]}>$25.00</Text>
                <Text style={styles.originalPrice}>$45.00</Text>
                <Text style={styles.discount}>25% off</Text>
            </View>
        </View>
    );
}
