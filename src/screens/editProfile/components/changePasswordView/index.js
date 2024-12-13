import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

export function ChangePasswordView(props) {
    const { colors } = useTheme()
    const { isDark,textRtlStyle,viewSelfRtlStyle,t } = useValues()
    const [isFocus, setIsFocus] = useState(false);


    const focus = (value) => {
        setIsFocus(value)
    }
    return (
        <View style={[styles.changePassword]}>
            <View
                style={[
                    styles.inputView,
                    { backgroundColor: isDark ? colors.primary : appColors.gray },

                    { borderColor: isDark ? colors.primary : appColors.drawer },
                    isFocus && { backgroundColor: appColors.border },
                    isFocus && { backgroundColor: isDark ? colors.primary : appColors.drawer, borderColor: isDark ? appColors.primary : appColors.primary },]}>
                <Text style={[styles.changePasswordTxt, { color: colors.text },{textAlign:textRtlStyle}]}>{t('editProfilePage.changePassword')}</Text>
                <TextInput
                    placeholder={t('loginNRegister.password')}
                    onFocus={() => focus(true)}
                    secureTextEntry={false}
                    onBlur={() => focus(false)}
                    placeholderTextColor={appColors.content}
                    style={[styles.input,{textAlign:textRtlStyle}]}/>
                <TouchableOpacity style={[styles.leftIcon,{alignSelf:viewSelfRtlStyle}]} activeOpacity={0.7}>
                    <Icons.password />
                </TouchableOpacity>
            </View>
        </View>
    )
}