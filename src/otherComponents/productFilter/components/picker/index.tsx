import {
    View, Text, TouchableOpacity, LayoutAnimation,
    NativeModules,
} from "react-native";
import React, { useState } from "react";
import { Icons } from "../../../../utils/icons";
import { category } from "../../../../screens/data";
import styles from "./styles";
import { useValues } from "../../../../utils/context";

export function Picker() {
    const {t}=useValues()
    const [selected, setSelected] = useState(category[0].name);
    const [show, setShow] = useState(false);
    const { UIManager } = NativeModules;

    if (UIManager && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const setValue = (name) => {
        setSelected(name);
        showValue();
    };

    const showValue = () => {
        LayoutAnimation.easeInEaseOut();
        setShow(!show);
    };

    return (
        <View style={styles.mainView}>
            <TouchableOpacity activeOpacity={0.8} onPress={showValue} style={[styles.dropDownView]}>
                <Text style={styles.selectedTxt}>{t(selected)}</Text>
                <Icons.dropDown />
            </TouchableOpacity>
            {show && (
                <View style={styles.view}>
                    {category.map((item, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.6} onPress={() => setValue(item.name)}>
                            <Text style={[styles.name]}>{t(item.name)}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
}
