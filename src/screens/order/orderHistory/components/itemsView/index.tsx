import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import ContentLoader, { Rect } from "react-content-loader/native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { orderHistory } from "../../../../data";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";
import { useEffect, useState } from "react";

export function ItemsView() {

    const { colors } = useTheme();
    const { isDark, viewRtlStyle, t, currSymbol, currValue } = useValues();
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
            width="100%"
            height={120}
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
            style={{ marginBottom: 16, borderRadius: 8 }}
        >
            <Rect x="16" y="16" rx="4" ry="4" width="70%" height="16" />
            <Rect x="16" y="40" rx="4" ry="4" width="50%" height="14" />
            <Rect x="16" y="64" rx="4" ry="4" width="40%" height="14" />
            <Rect x="16" y="88" rx="4" ry="4" width="40%" height="14" />
            <Rect x="80%" y="16" rx="8" ry="8" width="64" height="64" />
        </ContentLoader>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} style={[styles.listView, { backgroundColor: isDark ? colors.primary : appColors.gray }]} key={item.id}>
            <View style={[styles.subView, { flexDirection: viewRtlStyle }]}>
                <View>
                    <View style={[{ flexDirection: 'row' }]}>
                        <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.text').substring(0, 27) + ".."} </Text>
                    </View>
                    <Text style={styles.add}>{t(item.add)}</Text>
                    <View style={[styles.paidView, { flexDirection: viewRtlStyle }]}>
                        <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.paid')}: <Text style={styles.paid}>{currSymbol}{(item.paid * currValue).toFixed(2)}, </Text></Text>
                        <Text style={[styles.data, { color: colors.text }]}>{t('orderDetailPage.items')} <Text style={styles.paid}>{t(item.item)}</Text></Text>
                    </View>
                </View>
                <Image source={images.orderHistoryMap} />
            </View>
            <View style={[styles.orderAgain, { flexDirection: viewRtlStyle }]}>
                <Text style={[styles.data, { color: colors.text }]}>{t('orderHistoryPage.orderAgain')}</Text>
                <Text style={styles.reteNReview}>{t('orderHistoryPage.rateNReviewProduct')}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            data={loading ? Array.from({ length: 5 }) : orderHistory}
            keyExtractor={(item, index) => (item?.id || index).toString()}
            renderItem={({ item }) =>
                loading ? (
                    <SkeletonLoader />
                ) : (
                    renderItem({ item })
                )
            }
        />
    );
}
