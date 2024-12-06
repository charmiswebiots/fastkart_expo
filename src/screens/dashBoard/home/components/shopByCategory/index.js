import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { category } from "../../../../data";
import { windowWidth } from "../../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";


export function ShopByCategory({onPress}) {
    const {colors}=useTheme()
    return (
        <View>
            <View style={styles.category}>
                <View style={styles.line} />
                <Text style={[styles.shopByCategory,{color:colors.text}]}>Shop by Category</Text>
            </View>
            <FlatList
                data={category}
                numColumns={4}
                style={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={({ item, index }) =>
                    <TouchableOpacity style={styles.listView} activeOpacity={0.7} onPress={onPress} >
                        <View style={[styles.imageView, {
                        }]}>
                            <Image source={item.image} style={styles.image} resizeMode='contain' />
                        </View>
                        <View style={{width:windowWidth(99)}}>
                        <Text style={[styles.name,{color:colors.text}]} numberOfLines={2}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                }
            />

        </View>
    )
}