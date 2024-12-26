import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import { recentlySearch } from "../../../../data";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from '../../../../../utils/context'
import appColors from "../../../../../theme/appColors";
import ContentLoader, { Rect } from 'react-content-loader/native';


export function RecentlySearchView() {
    const [loading, setLoading] = useState(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();

    useEffect(() => {
        if (addressLoaded) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);

            }, 3000);
        }
    }, [addressLoaded, setAddressLoaded]);

    const SkeletonLoader = () => (
        <ContentLoader
            speed={1}
            width={400}
            height={55}
            viewBox="0 0 400 55"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >


            <Rect x="7" y="5" rx="4" ry="4" width="30%" height="35" />
            <Rect x="140" y="5" rx="4" ry="4" width="18%" height="35" />
            <Rect x="225" y="5" rx="4" ry="4" width="20%" height="35" />
            <Rect x="318" y="5" rx="4" ry="4" width="20%" height="35" />



        </ContentLoader>
    );
    const { colors } = useTheme();
    const { isDark, textRtlStyle, t } = useValues();

    return (
        <View>
            <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>
                {t('searchPage.recentlySearch')}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={[styles.scrollView]}>
                {loading ? (
                    Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))
                ) : (
                    recentlySearch.map((item, index) => (
                        <Text
                            key={index}
                            style={[styles.name, { color: colors.text }, { backgroundColor: isDark ? colors.primary : appColors.drawer }]}
                        >
                            {t(item.name)}
                        </Text>
                    ))
                )}
            </ScrollView>
        </View>
    );
}
