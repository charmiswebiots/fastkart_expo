import React from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { GlobalStyle } from '../../styles/style'
import appColors from "../../theme/appColors";
import { OptionButton } from "../../commonComponents";
import { packSize } from "../../screens/data";
import { Picker } from "./components/picker";
import { useState } from "react";

export function ProductFilter(props) {

    const [select, setSelect] = useState()
    const [low, setLow] = useState();
    const [high, setHigh] = useState();
    const getValue = (low, high) => {
        setLow(low);
        setHigh(high);
    };
    return (
        <View style={[GlobalStyle.modal, { backgroundColor: appColors.white }]}>
            <View style={[styles.category]}>
                <Text style={[styles.categoryTxt]}>Category</Text>
                <Text style={styles.reset}>Reset</Text>
            </View>
            <Text style={[styles.packSize]}>Pack Size</Text>
            <FlatList
                columnWrapperStyle={[styles.list]}
                contentContainerStyle={styles.list}
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
            <Text style={[styles.priceRange]}>Price Range</Text>
            {/* <RangeSlider
            t={t}
            setValue={getValue}
        /> */}
            {/* <View style={Styles.rangeView}>
            <Text>{commonContext.currSymbol}{low}</Text>
            <Text>{commonContext.currSymbol}{high}</Text>
        </View> */}
            <OptionButton txt1={'Close'} txt2={'Apply'} onPress1={props.showModal} onPress2={props.showModal} />
            <Picker  />
        </View>
    )
}