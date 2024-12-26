



import React, { FC } from "react";
import { View, TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import styles from "./styles";

import { useValues } from "../../utils/context";
import { MenuItem } from "../../otherComponents/drawerComponents/components";

interface RtlSwitchProps {
    isOn: boolean;
    onToggle: () => void;
    width?: string;
    text?: string;
    icon?: React.ReactNode;
    switchIcon?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const RtlSwitch: FC<RtlSwitchProps> = ({
    isOn,
    onToggle,
    width = "100%",
    text = "",
    icon = null,
    style,
}) => {
    const { viewRtlStyle, viewSelfRtlStyle } = useValues();
    return (
        <View
            style={[
                styles.switchView,
                { flexDirection: viewRtlStyle, width },
                { alignItems: viewSelfRtlStyle },
            ]}
        >
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
                <View style={[isOn ? styles.circleOn : styles.circleOff]} />
            </TouchableOpacity>
        </View>
    );
}