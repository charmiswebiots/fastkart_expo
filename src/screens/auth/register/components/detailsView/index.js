import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { Input } from "../../../../../commonComponents";
import { Icons } from "../../../../../utils/icons";


export function DetailsView() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const visiblePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View>
            <Text style={[styles.online]}>Register Account</Text>
            <View style={styles.container1}>
                <Input
                    placeholder={'Full Name'}
                    rightIcon={<Icons.fullName />}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
                <Input
                    placeholder={'Email address'}
                    rightIcon={<Icons.atSign />}
                    style={styles.input}

                />
            </View>
            <View style={styles.container}>
                <Input
                    placeholder={'Password'}
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