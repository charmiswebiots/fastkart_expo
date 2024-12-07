import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MenuItem } from "../../otherComponents/drawerComponents/components";
import styles from "./styles";
import { useValues } from "../../utils/context";

export function Switch({
    isOn,
    onToggle,
    width = "100%",
    text = "",
    icon = null,
    style,
}) {

    const {viewRtlStyle,viewSelfRtlStyle}=useValues()
    return (
        <View style={[styles.switchView, { flexDirection: viewRtlStyle, width },{alignItems:viewSelfRtlStyle}]}>
            <MenuItem text={text} icon={icon} showSwitch />
            <TouchableOpacity
                style={[
                    styles.switchContainer,
                    isOn ? styles.switchOn : styles.switchOff,
                    style,
                ]}
                onPress={onToggle}
                activeOpacity={0.7}
            >
                <View
                    style={[
                        styles.circle,
                        isOn ? styles.circleOn : styles.circleOff,
                    ]}
                />
            </TouchableOpacity>
        </View>
    );
}


