

import React, { FC } from "react";
import { View, TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import styles from "./styles";
import { windowHeight } from "../../theme/appConstant";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";
import { NavigationProp, TabNavigationState, Descriptor } from '@react-navigation/native';

interface TabComponentsProps {
    state: TabNavigationState;
    descriptors: { [key: string]: Descriptor };
    navigation: NavigationProp<any>;
}

export const TabComponents: FC<TabComponentsProps> = ({ state, descriptors, navigation }) => {
    const { viewRtlStyle } = useValues();
    
    return (
        <View style={[styles.mainView, { flexDirection: viewRtlStyle }]}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label: string = options.tabBarLabel as string;
                const Icon: React.FC = options.tabBarIcon as React.FC;
                const isFocused: boolean = state.index === index;
                const onPress = (event: GestureResponderEvent): void => {
                    navigation.navigate(route.name);
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        activeOpacity={1}
                        onPress={onPress}
                        style={styles.button}>
                        {isFocused && <Icons.selectedTab />}
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
    );
};