import { View, Text, ScrollView, Image, Animated } from "react-native";
import styles from "./styles";
import { category1 } from "../../../../data";
import { windowHeight } from "../../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues,useLoadingContext } from "../../../../../utils/context";
import { useState, useEffect, useRef } from "react";
import appColors from "../../../../../theme/appColors"; 
import ContentLoader, { Rect } from 'react-content-loader/native';


export function TrendingCategoryView() {
    const [loading, setLoading] = useState(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();

    useEffect(() => {
        if (!addressLoaded) {
            setLoading(true);
            console.log('loaijhng', loading)
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);

            }, 2000);
        }
    }, [addressLoaded, setAddressLoaded]);

    const SkeletonLoader = () => (
        <ContentLoader
            speed={1}
            width={400}
            height={55}
            viewBox="0 0 400 55"
            backgroundColor={appColors.interpolateBackground}
            foregroundColor={appColors.placeholder}
        >


            <Rect x="7" y="5" rx="4" ry="4" width="15%" height="55" />
            <Rect x="90" y="5" rx="4" ry="4" width="15%" height="55" />
            <Rect x="170" y="5" rx="4" ry="4" width="15%" height="55" />
            <Rect x="250" y="5" rx="4" ry="4" width="15%" height="55" />
            <Rect x="325" y="5" rx="4" ry="4" width="15%" height="55" />



        </ContentLoader>
    );
    const { colors } = useTheme();
    const { textRtlStyle, t } = useValues();

    return (
        <View>
            <Text style={[styles.txt, { color: colors.text, textAlign: textRtlStyle }]}>
                {t('searchPage.trendingCategory')}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {loading ? (
                    Array.from({ length: 1 }).map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))
                ) : (
                    category1.map((item, key) => (
                        <View
                            key={key}
                            style={[
                                styles.image,
                                {
                                    backgroundColor: item.backgroundColor || appColors.defaultBackground,
                                    borderColor: item.borderColor || appColors.defaultBorderColor,
                                    borderWidth: windowHeight(1),
                                },
                            ]}
                        >
                            <Image source={item.image} style={styles.img} />
                        </View>
                    ))
                )}
            </ScrollView>
        </View>
    );
}
