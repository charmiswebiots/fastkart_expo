import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../theme/appConstant";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";

export function TabComponents({state, descriptors, navigation}) {
    const {viewRtlStyle}=useValues()
    return (
        <View
            style={[styles.mainView, { flexDirection:viewRtlStyle }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel
                const Icon = options.tabBarIcon
                const isFocused = state.index === index;
                const onPress = () => {
                    navigation.navigate(route.name);
                };

                return (
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={onPress}
                        style={styles.button}>
                        {isFocused &&
                            <Icons.selectedTab />}
                        <View style={{ marginTop: isFocused ? windowHeight(0) : windowHeight(4) }}>
                            <Icon />
                        </View>
                        <Text style={styles.label}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    )
}