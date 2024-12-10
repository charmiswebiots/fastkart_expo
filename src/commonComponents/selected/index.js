import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";
import { windowHeight } from "../../theme/appConstant";

export function Selected() {

    const { rtl } = useValues()

    return (

        <View style={[styles.selectView, rtl ? styles.selectRight : styles.selectLeft,{right:rtl?windowHeight(273):0}]}>
                <Icons.select />
        </View>
    )
}