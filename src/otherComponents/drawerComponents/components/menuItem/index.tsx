import React, { FC } from "react";
import { View, TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { windowWidth } from "../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

interface MenuItemProps {
    onPress: () => void;
    width?: number;
    showSwitch?: boolean;
    icon: JSX.Element;
    text: string;
    fill?: string;
    style?: StyleProp<ViewStyle>;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, rtl, viewSelfRtlStyle, t } = useValues();

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPress}
            style={[
                styles.mainView,
                {
                    width: props.width
                        ? props.width
                        : props.showSwitch
                        ? windowWidth(260)
                        : windowWidth(320),
                    flexDirection: viewRtlStyle,
                },
            ]}
        >
            <View style={{ flexDirection: viewRtlStyle }}>
                {props.icon}
                <Text
                    style={[
                        styles.txt,
                        rtl ? styles.txtRight : styles.txtLeft,
                        { color: colors.text },
                    ]}
                >
                    {t(props.text)}
                </Text>
            </View>
            {!props.showSwitch && (
                <View
                    style={[
                        styles.arrow,
                        {
                            borderColor: isDark
                                ? appColors.drawer
                                : appColors.drawer,
                            backgroundColor: isDark
                                ? appColors.card
                                : appColors.drawer,
                        },
                        { alignSelf: viewSelfRtlStyle },
                        props.style,
                    ]}
                >
                    <View style={{ transform: [{ scaleX: rtl ? -1 : 1 }] }}>
                        <Icons.drawerArrow fill={props.fill} />
                    </View>
                </View>
            )}
        </TouchableOpacity>
    );
}