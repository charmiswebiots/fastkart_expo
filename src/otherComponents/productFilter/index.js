import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { GlobalStyle } from '../../styles/style'
import appColors from "../../theme/appColors";
import { OptionButton } from "../../commonComponents";
import { packSize } from "../../screens/data";
import { RangeSlider, Picker } from "./components";
import { useState } from "react";
import { useValues } from "../../utils/context";
import { useTheme } from "@react-navigation/native";

export function ProductFilter(props) {

    const { viewRtlStyle,textRtlStyle } = useValues()
    const { colors } = useTheme()

    const [select, setSelect] = useState()
    const [low, setLow] = useState();
    const [high, setHigh] = useState();

    const getValue = (low, high) => {
        setLow(low);
        setHigh(high);
    };
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: colors.background }]}>
            <View style={[styles.category, { flexDirection: viewRtlStyle }]}>
                <Text style={[styles.categoryTxt, { color: colors.text }]}>Category</Text>
                <Text style={styles.reset}>Reset</Text>
            </View>
            <Text style={[styles.packSize, { color: colors.text },{textAlign:textRtlStyle}]}>Pack Size</Text>
            <FlatList
                columnWrapperStyle={[styles.list, { flexDirection: viewRtlStyle }]}
                contentContainerStyle={[styles.list]}
                data={packSize}
                ItemSeparatorComponent={() => <View style={styles.seprator} />}
                numColumns={2}
                renderItem={({ item, index }) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => setSelect(index)} style={[styles.sizeView]}>
                        <Text style={[styles.size, {
                            color: select === index ? appColors.white : appColors.content
                        }]}>{item.size}</Text>
                    </TouchableOpacity>
                }
            />
            <Text style={[styles.priceRange,{ color: colors.text },{textAlign:textRtlStyle}]}>Price Range</Text>
            <RangeSlider />
            <OptionButton txt1={'Close'} txt2={'Apply'} onPress1={props.showModal} onPress2={props.showModal} />
            <Picker />
        </View>
    )
}