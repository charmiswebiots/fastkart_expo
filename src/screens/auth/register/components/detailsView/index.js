import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { Input } from "../../../../../commonComponents";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";


export function DetailsView() {
    const { colors } = useTheme()
    const { textRtlStyle, t } = useValues()
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const visiblePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View>
            <Text style={[styles.online, { color: colors.text }, { textAlign: textRtlStyle }]}>{t('register.registerAccount')}</Text>
            <View style={styles.container1}>
                <Input
                    placeholder={t('register.fullName')}
                    rightIcon={<Icons.fullName />}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
                <Input
                    placeholder={t('loginNRegister.emailAddress')}
                    rightIcon={<Icons.atSign />}
                    style={styles.input}

                />
            </View>
            <View style={styles.container}>
                <Input
                    placeholder={t('loginNRegister.password')}
                    style={styles.input}

                    rightIcon={
                        showPassword ? <Icons.showPassword /> : <Icons.hidePassword />
                    }
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    onPress1={visiblePassword}
                />
            </View>

        </View>
    );
}