import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { Input } from "../../../../commonComponents";
import { windowHeight, windowWidth } from "../../../../theme/appConstant";
import { useState } from "react";

export function ChangePasswordView(props) {
    const [isFocus, setIsFocus] = useState(false);


    const focus = (value) => {
        setIsFocus(value)
    }
    return (
        <View style={[styles.changePassword]}>
            <View
                style={[
                    styles.inputView,
                    isFocus && { backgroundColor: appColors.border },
                    isFocus && { borderColor: appColors.primary }

                ]}
            >
                <Text style={[styles.changePasswordTxt]}>Change Password</Text>
                <TextInput
                    placeholder={'Password'}
                    onFocus={() => focus(true)}
                    secureTextEntry={false}
                    onBlur={() => focus(false)}
                    placeholderTextColor={appColors.content}
                    style={[styles.input
                    ]}
                />

                <TouchableOpacity style={styles.leftIcon}  activeOpacity={0.7}>
                    <Icons.password />
                </TouchableOpacity>
            </View>
        </View>
    )
}