import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Input } from "../../../../../commonComponents/index";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function DetailsView() {
    const { colors } = useTheme()
    const { textRtlStyle, rtl } = useValues()
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const visiblePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View>
            <Text style={[styles.online, { color: colors.text }, { textAlign: textRtlStyle }]}>Login Account</Text>
            <View style={styles.container}>
                <Input
                    placeholder={'Email address'}
                    rightIcon={<Icons.atSign />}
                    style={styles.input}
                />
            </View>
            <View style={styles.container1}>
                <Input
                    placeholder={'Password'}
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

            <Text style={[styles.forgotPassword, { textAlign: rtl ? 'left' : 'right' }]}>Forgot password?</Text>
        </View>
    );
}


