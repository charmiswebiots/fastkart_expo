import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Input } from "../../../../../commonComponents/index";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function DetailsView() {
    const { colors } = useTheme()
    const { textRtlStyle, rtl, t } = useValues()
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const visiblePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View>
            <Text style={[styles.online, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('login.loginAccount')}</Text>
            <View style={styles.container}>
                <Input
                    placeholder={t('loginNRegister.emailAddress')}
                    rightIcon={<Icons.atSign />}
                    style={styles.input}
                />
            </View>
            <View style={styles.container1}>
                <Input
                    placeholder={t('loginNRegister.password')}
                    rightIcon={
                        showPassword ? <Icons.showPassword /> : <Icons.hidePassword />
                    }
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    onPress1={visiblePassword}
                    style={styles.input}

                />
            </View>

            <Text style={[styles.forgotPassword, { textAlign: rtl ? 'left' : 'right' }]}>{t('login.forgotPassword')}</Text>
        </View>
    );
}


