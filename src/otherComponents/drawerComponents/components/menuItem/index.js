import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { windowWidth } from "../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

export function MenuItem(props) {
    const { colors } = useTheme()
    const { isDark ,viewRtlStyle,rtl} = useValues()
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={[styles.mainView, { width: props.width ? props.width : props.showSwitch ? windowWidth(260) : windowWidth(320), flexDirection: viewRtlStyle }]}>
            <View style={{ flexDirection:viewRtlStyle }}>
                {props.icon}
                <Text style={[styles.txt, rtl?styles.txtRight:styles.txtLeft, { color: colors.text }]}>{props.text}</Text>
            </View>
            {!props.showSwitch &&
                <View style={[styles.arrow, { borderColor: isDark ? appColors.drawer : appColors.drawer, backgroundColor: isDark ? appColors.card : appColors.drawer }]}>
                    <View style={{ transform: [{ scaleX: rtl?-1:1 }] }}>
                        <Icons.drawerArrow fill={props.fill} />
                    </View>
                </View>}
        </TouchableOpacity>
    )
}