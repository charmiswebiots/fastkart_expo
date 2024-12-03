import React from "react";
import { View,Image, Text } from "react-native";
import styles from "./styles";
import { reviewStar } from "../../../../data";
import images from "../../../../../utils/images";

export function NameView() {
    return (
        <View>
            <Text style={[styles.txt]}>Assorted Capsicum Combo- (Red, Yellow, Green)</Text>
            <View style={[styles.ratingsView]}>
                <View style={{ flexDirection: "row" }}>
                {reviewStar.map((item, key) =>
                        <Image source={key === 4 ? images.star: images.star1 } style={styles.star} key={item.id} />
                    )}
                </View>
                <Text style={[styles.ratings]}>(150 Ratings)</Text>
            </View>
            <View style={[styles.view]}>
                <Text style={[styles.txt]}>$25.00</Text>
                <Text style={styles.originalPrice}>$45.00</Text>
                <Text style={styles.discount}>25% off</Text>
            </View>
        </View>
    );
}
