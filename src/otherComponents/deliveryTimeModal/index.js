import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { OptionButton, Selected } from "../../commonComponents";
import React from "react";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { useState } from "react";
import { delivery } from "../../screens/data";
import { GlobalStyle } from "../../styles/style";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function DeliveryTimeModal(props) {
    const {colors}=useTheme()
    const { isDark}=useValues()

    const [selectDeli, setSelectDeli] = useState(0);

    const selectDelivery = (key) => {
        setSelectDeli(key)
    }
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background}]}>
            <FlatList
                numColumns={2}
                data={delivery}
                columnWrapperStyle={[styles.column, { flexDirection: 'row' }]}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => selectDelivery(index)} style={[{ backgroundColor:isDark?colors.primary: appColors.gray, borderColor: selectDeli === index ? appColors.primary : appColors.gray }, styles.view]}>
                        {selectDeli === index &&
                            <Selected />}
                        <Text style={[styles.text,{color:colors.text}]}>{item.delivery}</Text>
                    </TouchableOpacity>
                }
            />
            <OptionButton txt1={'Cancel'} txt2={'Apply'} onPress1={props.onPress} onPress2={props.onPress} />
        </View>
    )
}