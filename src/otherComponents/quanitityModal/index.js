import React from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import appColors from "../../theme/appColors";
import styles from "./styles";
import { useState } from "react";
import { GlobalStyle } from "../../styles/style";
import { OptionButton, Selected } from "../../commonComponents";
import { quantity } from "../../screens/data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function QuanitityModal(props) {
    const { colors } = useTheme()
    const { isDark, viewRtlStyle, textRtlStyle ,t} = useValues()
    const [selectQty, setSelectQty] = useState(0);

    const selectQuantity = (key) => {
        setSelectQty(key)
    }
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <FlatList
                numColumns={2}
                data={quantity}
                columnWrapperStyle={[styles.column, { flexDirection: viewRtlStyle }]}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => selectQuantity(index)} style={[{ backgroundColor: isDark ? colors.primary : appColors.gray, borderColor: selectQty === index ? appColors.primary : appColors.gray }, styles.view]}>
                        {selectQty === index &&
                            <Selected />}
                        <Text style={[styles.txt, { color: colors.text }, { textAlign: textRtlStyle }]}>{item.gram} / {item.price}</Text>
                    </TouchableOpacity>
                }
            />
            <OptionButton txt1={t('commonText.cancle')} txt2={t('productFilter.apply')} onPress1={props.onPress} onPress2={props.onPress} />
        </View>
    )
}