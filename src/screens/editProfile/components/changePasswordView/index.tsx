import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { useState, FC } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

interface ChangePasswordViewProps {
}

export const ChangePasswordView: FC<ChangePasswordViewProps> = (props) => {
    const { colors } = useTheme();
    const { isDark, textRtlStyle, viewSelfRtlStyle, t, rtl } = useValues();
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const focus = (value: boolean): void => {
        setIsFocus(value);
    };

    return (
        <View style={[styles.changePassword]}>
            <View
                style={[
                    styles.inputView,
                    { backgroundColor: isDark ? colors.primary : appColors.gray },
                    { borderColor: isDark ? colors.primary : appColors.drawer },
                    isFocus && { backgroundColor: appColors.border },
                    isFocus && { backgroundColor: isDark ? colors.primary : appColors.drawer, borderColor: isDark ? appColors.primary : appColors.primary },
                ]}
            >
                <Text style={[styles.changePasswordTxt, { color: colors.text }, { textAlign: textRtlStyle }]}>
                    {t('editProfilePage.changePassword')}
                </Text>
                <TextInput
                    placeholder={t('orderTrackingPage.name')}
                    onFocus={() => focus(true)}
                    secureTextEntry={false}
                    onBlur={() => focus(false)}
                    placeholderTextColor={appColors.content}
                    style={[styles.input, { textAlign: textRtlStyle }]}
                />
                <TouchableOpacity style={[rtl ? styles.rightIcon : styles.leftIcon, { alignSelf: viewSelfRtlStyle }]} activeOpacity={0.7}>
                    <Icons.password />
                </TouchableOpacity>
            </View>
        </View>
    );
};