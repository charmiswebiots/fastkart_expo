import React from "react";
import { View ,FlatList,TouchableOpacity,Text} from "react-native";
import appColors from "../../theme/appColors";
import styles from "./styles";
import { useState } from "react";
import { GlobalStyle } from "../../styles/style";
import { OptionButton ,Selected} from "../../commonComponents";
import { quantity } from "../../screens/data";

export function QuanitityModal(props) {
    const [selectQty, setSelectQty] = useState(0);

    const selectQuantity = (key) => {
        setSelectQty(key)
    }
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: appColors.white }]}>
            <FlatList
                numColumns={2}
                data={quantity}
                columnWrapperStyle={[styles.column, { flexDirection: 'row' }]}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => selectQuantity(index)} style={[{ backgroundColor: appColors.gray, borderColor: selectQty === index ? appColors.primary : appColors.gray }, styles.view]}>
                        {selectQty === index &&
                            <Selected />}
                        <Text style={[styles.txt]}>{item.gram} / {item.price}</Text>
                    </TouchableOpacity>
                }
            />
            <OptionButton txt1={'Cancel'} txt2={'Apply'} onPress1={props.onPress} onPress2={props.onPress} />
        </View>
    )
}