import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { windowWidth } from "../../../../theme/appConstant";

export function MenuItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={[styles.mainView, { width: props.width ? props.width : props.showSwitch ? windowWidth(260) : windowWidth(320), flexDirection: 'row' }]}>
            <View style={{ flexDirection: 'row' }}>
                {props.icon}
                <Text style={[styles.txt, styles.txtLeft]}>{props.text}</Text>
            </View>
            {!props.showSwitch &&
                <View style={[styles.arrow, { borderColor: appColors.drawer, backgroundColor: appColors.drawer }]}>
                    <View style={{ transform: [{ scaleX: 1 }] }}>
                        <Icons.drawerArrow fill={props.fill} />
                    </View>
                </View>}
        </TouchableOpacity>
    )
}