import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Animated } from "react-native";
import styles from "./styles";
import { category } from "../../../../data";
import { windowWidth } from "../../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";


export function ShopByCategory({ onPress }) {

    const [loading, setLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true,
            }).start();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);


    const SkeletonLoader = () => {
        const skeletonData = Array(8).fill({});
    
        return (
            <FlatList
                data={skeletonData}
                numColumns={4}
                keyExtractor={(_, index) => `skeleton-${index}`}
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                renderItem={() => (
                    <View style={styles.listView}>
                        <View style={styles.skeletonImageView}>
                            <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
                        </View>
                        <View style={{ width: windowWidth(99) }}>
                            <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
                        </View>
                    </View>
                )}
            />
        );
    };
    
    const { colors } = useTheme()
    const { t } = useValues()

    // return (
    //     <View>
    //         <View style={styles.category}>
    //             <View style={styles.line} />
    //             <Text style={[styles.shopByCategory, { color: colors.text }]}>{t('homepage.shopByCategory')}</Text>
    //         </View>
    //         <FlatList
    //             data={category}
    //             numColumns={4}
    //             style={styles.list}
    //             ItemSeparatorComponent={() => <View style={styles.separator} />}
    //             renderItem={({ item, index }) =>
    //                 <TouchableOpacity style={styles.listView} activeOpacity={0.7} onPress={onPress} >
    //                     <View style={[styles.imageView, {
    //                     }]}>
    //                         <Image source={item.image} style={styles.image} resizeMode='contain' />
    //                     </View>
    //                     <View style={{ width: windowWidth(99) }}>
    //                         <Text style={[styles.name, { color: colors.text }]} numberOfLines={2}>{t(item.name)}</Text>
    //                     </View>
    //                 </TouchableOpacity>
    //             }
    //         />
    //     </View>
    // )
    return (
        <View>
            <View style={styles.category}>
                <View style={styles.line} />
                <Text style={[styles.shopByCategory, { color: colors.text }]}>
                    {t('homepage.shopByCategory')}
                </Text>
            </View>
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