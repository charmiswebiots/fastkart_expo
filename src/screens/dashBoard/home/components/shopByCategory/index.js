import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { category } from "../../../../data";
import { windowWidth } from "../../../../../theme/appConstant";


export function ShopByCategory() {
    return (
        <View>
            <View style={styles.category}>
                <View style={styles.line} />
                <Text style={[styles.shopByCategory]}>Shop by Category</Text>
            </View>
            <FlatList
                data={category}
                numColumns={4}
                style={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) =>
                    <TouchableOpacity style={styles.listView} activeOpacity={0.7} >
                        <View style={[styles.imageView, {
                        }]}>
                            <Image source={item.image} style={styles.image} resizeMode='contain' />
                        </View>
                        <View style={{width:windowWidth(99)}}>
                        <Text style={[styles.name]} numberOfLines={2}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />

        </View>
    )
}