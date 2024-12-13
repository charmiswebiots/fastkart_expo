import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { OptionButton } from "../../commonComponents";
import { orderHistoryFilter } from "../../screens/data";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";


export function OrderHistoryFilterModal({ showModal }) {

    const { isDark, textRtlStyle, viewRtlStyle ,t} = useValues()
    const { colors } = useTheme()
    const [selectedOffer, setSelectedOffer] = useState(null);

    const selectOffer = (val) => {
        setSelectedOffer(val)
    }

    return (
        <View style={[styles.mainView, { backgroundColor: colors.background }]}>
            <FlatList
                data={orderHistoryFilter}
                renderItem={({ item }) =>
                    <View style={styles.listView}>
                        <Text style={[styles.dayTxt, { textAlign: textRtlStyle }]}>{t(item.day)}</Text>
                        <FlatList
                            data={item.value}
                            numColumns={2}
                            columnWrapperStyle={[styles.columnWrapperStyle, { flexDirection: viewRtlStyle }]}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => selectOffer(item.id)} style={[styles.dataView, {
                                    backgroundColor: item.id === selectedOffer ? appColors.primary
                                        : isDark
                                            ? colors.primary
                                            : appColors.white,
                                    borderColor: appColors.primary,
                                }]}>
                                    <Text style={[styles.txt, { color: item.id === selectedOffer ? appColors.white : appColors.content }]}>{t(item.txt)}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                }
            />
            <OptionButton
                txt1={'commonText.close'}
                txt2={'productFilter.apply'}
                onPress1={showModal}
                onPress2={showModal}
                style={styles.btn}
            />
        </View>
    )
}