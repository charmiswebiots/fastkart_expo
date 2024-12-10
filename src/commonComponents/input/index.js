import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import styles from "./styles";
import appColors from "../../theme/appColors";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";
import { windowHeight, windowWidth } from "../../theme/appConstant";

export function Input({
    placeholder,
    editable = true,
    value,
    keyboardType,
    onChangeText,
    secureTextEntry,
    onPress,
    onPress1,
    isText = false,
    maxLength,
    leftIcon,
    rightIcon,
    style,
    text,
}) {
    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = (value) => {
        setIsFocus(value);
    };

    const { isDark, viewRtlStyle, rtl } = useValues();
    const { colors } = useTheme();

    return (
        <View>
            <View
                style={[
                    styles.inputView,
                    { backgroundColor: isDark ? colors.primary : appColors.gray },
                    { borderColor: isDark ? colors.primary : appColors.drawer },
                    { paddingLeft: leftIcon ? windowWidth(56) : windowWidth(16) },
                    style,
                    isFocus && {
                        backgroundColor: isDark ? colors.primary : appColors.drawer,
                        borderColor: isDark ? appColors.primary : appColors.primary,
                    },
                ]}
            >
                <TextInput
                    editable={editable}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    onFocus={() => handleFocus(true)}
                    onBlur={() => handleFocus(false)}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={isDark ? appColors.white : appColors.content}
                    style={[
                        styles.input,
                        style,
                        { color: colors.text },
                        { flexDirection: viewRtlStyle },
                        { textAlign: rtl ? "right" : "left" },


                    ]}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                />
                {leftIcon && (
                    <TouchableOpacity
                        style={[
                            styles.leftIcon,
                            { left: rtl ? undefined : windowHeight(12), right: rtl ? windowHeight(12) : undefined },
                        ]}
                        onPress={onPress}
                        activeOpacity={0.7}
                    >
                        {leftIcon}
                    </TouchableOpacity>
                )}
                {rightIcon || isText ? (
                    <TouchableOpacity
                        style={[
                            styles.rightIcon,
                            { right: rtl ? undefined : windowHeight(10), left: rtl ? windowHeight(12) : undefined },
                        ]}
                        onPress={onPress1}
                        activeOpacity={0.7}
                    >
                        {isText ? (
                            <Text style={styles.text}>{text}</Text>
                        ) : (
                            rightIcon
                        )}
                    </TouchableOpacity>
                ) : null}
            </View>
        </View>
    );
}
