import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { category } from "../../../../data";
import { windowWidth, windowHeight } from "../../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import ContentLoader, { Rect } from "react-content-loader/native";
import appColors from "../../../../../theme/appColors";

export function ShopByCategory({ onPress }) {

    const [loading, setLoading] = useState(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();

    useEffect(() => {
        if (!addressLoaded) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);
            }, 3000);  // Simulated loading time (3 seconds)
        }
    }, [addressLoaded, setAddressLoaded]);

    const SkeletonLoader = () => {
        return (
            <FlatList
                data={Array(8).fill({})}  // Skeleton with 8 items (adjust as needed)
                numColumns={4}
                keyExtractor={(_, index) => `skeleton-${index}`}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={() => (
                    <View style={styles.listView}>
                        {/* Skeleton for Image */}
                        <View style={[styles.skeletonImageView, { marginTop: windowHeight(13) }]}>
                            <ContentLoader
                                speed={1}
                                width={windowWidth(70)}
                                height={windowWidth(70)}
                                viewBox="0 0 70 70"
                                backgroundColor={appColors.interpolateBackground}
                                foregroundColor={appColors.placeholder}
                            >
                                <Rect x="0" y="0" rx="4" ry="4" width="70" height="70" />
                            </ContentLoader>
                        </View>

                        {/* Skeleton for Category Name */}
                        <View style={{ marginTop: windowHeight(13) }}>
                            <ContentLoader
                                speed={1}
                                width={windowWidth(99)}
                                height={windowHeight(12)}
                                viewBox="0 0 100 8"
                                backgroundColor={appColors.interpolateBackground}
                                foregroundColor={appColors.placeholder}
                            >
                                <Rect x="0" y="0" rx="4" ry="4" width="95" height="12" />
                            </ContentLoader>
                        </View>
                    </View>
                )}
            />
        );
    };

    const { colors } = useTheme();
    const { t } = useValues();

    return (
        <View>
            {/* Category Title */}
            <View style={styles.category}>
                <View style={styles.line} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: appColors.loaderBackground, width: windowHeight(70), height: windowHeight(1), top: windowHeight(17), right: windowHeight(14) }} />
                    <Text style={[styles.shopByCategory, { color: colors.text }]}>
                        {t('homepage.shopByCategory')}
                    </Text>
                    <View style={{ backgroundColor: appColors.loaderBackground, width: windowHeight(70), height: windowHeight(1), top: windowHeight(17), left: windowHeight(14) }} />
                </View>
            </View>

            {/* Conditionally Render Skeleton or Content */}
            {loading ? (
                <SkeletonLoader />
            ) : (
                <FlatList
                    data={category}
                    numColumns={4}
                    style={styles.list}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.listView}
                            activeOpacity={0.7}
                            onPress={onPress}
                        >
                            <View style={styles.imageView}>
                                <Image
                                    source={item.image}
                                    style={styles.image}
                                    resizeMode="contain"
                                />
                            </View>
                            <View style={{ width: windowWidth(100) }}>
                                <Text
                                    style={[styles.name, { color: colors.text }]}
                                    numberOfLines={2}
                                >
                                    {t(item.name)}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
