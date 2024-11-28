import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { OptionButton, Selected } from "../../commonComponents";
import React from "react";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { useState } from "react";
import { delivery } from "../../screens/data";
import { GlobalStyle } from "../../styles/style";

export function DeliveryTimeModal(props) {

    const [selectDeli, setSelectDeli] = useState(0);

    const selectDelivery = (key) => {
        setSelectDeli(key)
    }
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: appColors.white }]}>
            <FlatList
                numColumns={2}
                data={delivery}
                columnWrapperStyle={[styles.column, { flexDirection: 'row' }]}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => selectDelivery(index)} style={[{ backgroundColor: appColors.gray, borderColor: selectDeli === index ? appColors.primary : appColors.gray }, styles.view]}>
                        {selectDeli === index &&
                            <Selected />}
                        <Text style={[styles.text]}>{item.delivery}</Text>
                    </TouchableOpacity>
                }
            />
            <OptionButton txt1={'Cancel'} txt2={'Apply'} onPress1={props.onPress} onPress2={props.onPress} />
        </View>
    )
}