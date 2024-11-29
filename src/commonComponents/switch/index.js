import React from "react";
import { View } from "react-native";
import styless from "./styles";
import SwitchToggle from "toggle-switch-react-native";
import { MenuItem } from "../../otherComponents/drawerComponents/components";
import { windowHeight } from "../../theme/appConstant";

export function Switch({
    isOn,
    onToggle,
    width = "100%",
    text = "",
    icon = null,
}) {
    return (
        <View style={[styless.switchView, { flexDirection: "row", width }]}>
            <MenuItem text={text} icon={icon} showSwitch />
            <View style={{marginHorizontal:windowHeight(80)}}>
            <SwitchToggle
                isOn={isOn}
                onToggle={onToggle}
                onColor="#ccc"
                thumbOnStyle={styless.thumbOnStyle}
                trackOnStyle={styless.trackOnStyle}
            />
            </View>
        </View>
    );
}
