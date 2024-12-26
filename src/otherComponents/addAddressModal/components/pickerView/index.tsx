import React, { FC } from "react";
import { View, TouchableOpacity, FlatList, Text, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";
import { windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";
import { useValues } from "../../../../utils/context";
import { useTheme } from "@react-navigation/native";

interface PickerViewProps {
    pointerEvents: 'auto' | 'none' | 'box-none' | 'box-only';
    onPress: () => void;
    width?: number;
    value: string;
    showValue: boolean;
    data: Array<{ title: string }>;
    setInputValue: (value: string) => void;
}

export const PickerView: FC<PickerViewProps> = (props) => {
    const { colors } = useTheme();
    const { textRtlStyle, isDark } = useValues();
    
    const setValue = (item: { title: string }): void => {
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
                    } as ViewStyle
                ]}
            >
                <Text style={[styles.txt, { textAlign: textRtlStyle, color: colors.text } as TextStyle]}>
                    {props.value}
                </Text>
            </TouchableOpacity>
            {props.showValue && (
                <View
                    style={[
                        styles.list,
                        {
                            width: props.width ? props.width : windowWidth(440),
                            backgroundColor: isDark ? colors.primary : appColors.gray,
                        } as ViewStyle
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
                                <Text style={[styles.listTxt, { textAlign: textRtlStyle, color: colors.text } as TextStyle]}>
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