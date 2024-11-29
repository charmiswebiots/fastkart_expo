import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";

export function SubCategoryView({ subCategory }) {
    return (
        <FlatList
            data={subCategory} 
            numColumns={3}
            keyExtractor={(item) => item.id.toString()} 
            contentContainerStyle={styles.containerStyle}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => console.log(`Clicked on ${item.name}`)}
                    style={styles.itemContainer}
                >
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                    </View>
                    <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
}
