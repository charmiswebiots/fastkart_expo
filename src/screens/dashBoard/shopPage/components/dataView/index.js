import { View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { data } from "../../../../data";
import { Counter } from "../../../../../commonComponents";
import images from "../../../../../utils/images";

export function DataView() {
    return (
        <View style={styles.container}>
            {data.map((item, key) => (
                key === 3 ? (
                    <Image key={key} source={images.categoryBanner} style={styles.img} />
                ) : (
                    <View key={key} style={styles.mainView}>
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                        <View style={styles.lineView} />
                        <View style={styles.counterView}>
                            <TouchableOpacity onPress={item.onPress} activeOpacity={0.7}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.weight}>{item.weight}</Text>
                            </TouchableOpacity>
                            <View style={styles.priceView}>
                                <View style={styles.discountPriceView}>
                                    <Text style={styles.price}>{item.price}</Text>
                                    <View style={styles.discountView}>
                                        <Text style={styles.discount}>{item.discount}% </Text>
                                        <Text style={styles.discount}>off</Text>
                                    </View>
                                </View>
                                <Counter />
                            </View>
                        </View>
                    </View>
                )
            ))}
        </View>
    );
}
