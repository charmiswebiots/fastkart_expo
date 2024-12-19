import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import { categoryData } from "../../../../data";
import appColors from "../../../../../theme/appColors";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import { windowHeight } from "../../../../../theme/appConstant";

export function CategoryView({ onPress }) {


    const { isDark, viewRtlStyle, t } = useValues();
    const { colors } = useTheme();
    const [categoryId, setCategoryId] = useState(categoryData[1]?.id);
    const [subCategories, setSubCategories] = useState(categoryData[1]?.subCategory || []);

    useEffect(() => {
        if (categoryData.length > 0) {
            matchValue(categoryData[1]?.id);
        }
    }, []);

    const matchValue = (id) => {
        setCategoryId(id);
        const subCategory = categoryData.find((cat) => cat.id === id)?.subCategory || [];
        setSubCategories(subCategory);
    };



    return (
        <View style={{ flexDirection: viewRtlStyle }}>
            <View>
                {categoryData.map((item) => (
                    <View key={item.id}>
                        <TouchableOpacity
                            onPress={() => matchValue(item.id)}
                            activeOpacity={0.8}
                            style={[
                                styles.nameView,
                                {
                                    backgroundColor:
                                        categoryId === item.id
                                            ? isDark
                                                ? colors.background
                                                : appColors.white
                                            : isDark
                                                ? colors.primary
                                                : appColors.drawer,
                                },
                            ]}
                        >
                            <Image source={item.image} style={styles.image} resizeMode="cover" />
                            <Text style={[styles.name, { color: colors.text }]}>{t(item.name)}</Text>
                        </TouchableOpacity>
                        <View style={styles.line} />
                    </View>
                ))}
            </View>

            <View style={styles.view}>
                <FlatList
                    data={subCategories}
                    columnWrapperStyle={styles.colum} 
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    contentContainerStyle={[styles.containerStyle, { flexDirection: viewRtlStyle }]}
                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.imgView}>
                            <View
                                style={[
                                    styles.itemImg,
                                    {
                                        backgroundColor: isDark
                                            ? colors.primary
                                            : appColors.drawer,
                                    },
                                ]}
                            >
                                <Image resizeMode="contain" source={item.image} style={styles.img} />
                            </View>
                            <Text style={[styles.nameTxt]}>{t(item.name)}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}



