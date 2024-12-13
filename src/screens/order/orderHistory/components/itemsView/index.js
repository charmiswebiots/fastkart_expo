import { View, FlatList, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { orderHistory } from "../../../../data";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";


export function ItemsView() {
    const {colors}=useTheme()
    const { isDark,viewRtlStyle ,t} = useValues()

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerStyle}
            data={orderHistory}
            renderItem={({ item }) =>
                <TouchableOpacity activeOpacity={0.8} style={[styles.listView, { backgroundColor: isDark ? colors.primary : appColors.gray }]} key={item.id}>
                    <View style={[styles.subView,{flexDirection:viewRtlStyle}]}>
                        <View>
                            <View style={[{flexDirection:'row'}]}>
                                <Text style={[styles.data,{color:colors.text}]}>{t('orderHistoryPage.idTxt')}: {t(item.id)}, </Text>
                                <Text style={[styles.data,{color:colors.text}]}>{t('orderHistoryPage.dt')}: {t(item.date)}</Text>
                            </View>
                            <Text style={styles.add}>{t(item.add)}</Text>
                            <View style={[styles.paidView,{flexDirection:viewRtlStyle}]}>
                                <Text style={[styles.data,{color:colors.text}]}>{t('orderHistoryPage.paid')}: <Text style={styles.paid}>{item.paid}, </Text></Text>
                                <Text style={[styles.data,{color:colors.text}]}>{t('orderDetailPage.items')} <Text style={styles.paid}>{t(item.item)}</Text></Text>
                            </View>
                        </View>
                        <Image source={images.orderHistoryMap} />
                    </View>
                    <View style={[styles.orderAgain,{flexDirection:viewRtlStyle}]}>
                        <Text style={[styles.data,{color:colors.text}]}>{t('orderHistoryPage.orderAgain')}</Text>
                        <Text style={styles.reteNReview}>{t('orderHistoryPage.rateNReviewProduct')}</Text>
                    </View>
                </TouchableOpacity>
            }
        />
    )
}