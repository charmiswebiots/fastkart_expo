import React from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import styles from "./styles";
import { windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";
import { useValues } from "../../../../utils/context";
import { useTheme } from "@react-navigation/native";

export function PickerView(props) {
    const { colors } = useTheme()
    const { textRtlStyle, isDark } = useValues()
    const setValue = (item) => {
        props.setInputValue(item.title);
    }

    return (
        <View pointerEvents={props.pointerEvents}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={props.onPress}
                style={[
                    styles.inputView,
                    {
                        width: props.width ? props.width : windowWidth(440),
                        borderColor: appColors.primary,
                        justifyContent: 'center',
                        backgroundColor: isDark ? colors.primary : appColors.gray,
                    }
                ]}
            >
                <Text style={[styles.txt, { textAlign: textRtlStyle, color: colors.text }]}>
                    {props.value}
                </Text>
            </TouchableOpacity>
            {props.showValue && (
                <View
                    style={[
                        styles.list,
                        {
                            width: props.width ? props.width : windowWidth(440),
                            backgroundColor: isDark ? colors.primary : appColors.gray,                        }
                    ]}
                >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentStyle}
                        data={props.data}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.lstView}
                                onPress={() => setValue(item)}
                                activeOpacity={0.7}
                            >
                                <Text style={[styles.listTxt, { textAlign: textRtlStyle, color: colors.text }]}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            )}
        </View>
    );
}
