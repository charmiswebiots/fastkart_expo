import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";
import { shopCategory } from "../../../../data";
import appColors from "../../../../../theme/appColors";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";

export function CategoryView() {
    const {isDark}=useValues()
    const {colors}=useTheme()
    const [selectCategory, setSelectCategory] = useState(0);

    const selectedCategory = (key) => {
        setSelectCategory(key)
    }

    return (
        <ScrollView style={[styles.list,{backgroundColor:isDark?colors.primary:appColors.gray}]} horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.category]}>
                {
                    shopCategory.map((item, key) =>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => selectedCategory(key)}>
                            <Text key={key} style={[styles.name, { color: key === selectCategory ? appColors.primary : colors.text }]}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
            </View>
        </ScrollView>
    );
}
