import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { windowWidth } from "../../theme/appConstant";
import { OptionButton } from "../../commonComponents";
import { orderHistoryFilter } from "../../screens/data";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";


export function OrderHistoryFilterModal({ showModal }) {

    const { isDark } = useValues()
    const { colors } = useTheme()
    const [selectedOffer, setSelectedOffer] = useState(null);

    const selectOffer = (val) => {
        setSelectedOffer(val)
    }

    return (
        <View style={{ backgroundColor: colors.background, borderTopStartRadius: windowWidth(20), borderTopEndRadius: windowWidth(20), position: 'absolute', bottom: 0, width: '100%' }}>
            <FlatList
                data={orderHistoryFilter}
                renderItem={({ item }) =>
                    <View style={styles.listView}>
                        <Text style={[styles.dayTxt]}>{item.day}</Text>
                        <FlatList
                            data={item.value}
                            numColumns={2}
                            columnWrapperStyle={[styles.columnWrapperStyle]}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => selectOffer(item.id)} style={[styles.dataView, {
                                    backgroundColor: item.id === selectedOffer ? appColors.primary
                                        : isDark
                                            ? colors.primary
                                            : appColors.white,
                                    borderColor: appColors.primary,
                                }]}>
                                    <Text style={[styles.txt, { color: item.id === selectedOffer ? appColors.white : appColors.content }]}>{item.txt}</Text>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                }
            />
            <OptionButton
                txt1={'Close'}
                txt2={'Apply'}
                onPress1={showModal}
                onPress2={showModal}
                style={styles.btn}
            />
        </View>
    )
}