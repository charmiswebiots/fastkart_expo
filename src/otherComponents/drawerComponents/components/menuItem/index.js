import React from "react";
import { View ,TouchableOpacity,Text} from "react-native";
import styles from "./styles";
import Icons from '../../../../utils/icons'
import { Icons } from "../../../../utils/icons";

export function MenuItem() {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onPress} style={[styles.mainView, { width: props.width ? props.width : props.showSwitch ? windowWidth(260) : windowWidth(320), flexDirection: viewAlign }]}>
            <View style={{ flexDirection: viewAlign }}>
                {props.icon}
                <Text style={[styles.txt, styles.txtLeft]}>{t(props.text)}</Text>
            </View>
            {!props.showSwitch &&
                <View style={[styles.arrow, { borderColor: commonContext.isDark ? Appcolor.white : Appcolor.drawer, backgroundColor: commonContext.isDark ? Appcolor.darkDrawer : Appcolor.drawer }]}>
                    <View style={{ transform: [{ scaleX: 1 }] }}>
                        <Icons.drawerArrow fill={props.fill} />
                    </View>
                </View>}
        </TouchableOpacity>
    )
}trterterter