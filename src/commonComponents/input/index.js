// import React from "react";
// import { View, TouchableOpacity, TextInput, Text } from "react-native";
// import styles from "./styles";
// import appColors from "../../theme/appColors";
// import { useState } from "react";


// export function Input({ placeholder, editable, value, keyboardType, onChangeText, secureTextEntry, onPress, onPress1, isText,maxLength, leftIcon, rightIcon, style,props }) {
//     const [isFocus, setIsFocus] = useState(false);


//     const focus = (value) => {
//         setIsFocus(value)
//     }

//     return (
//         <View >
//             <View
//                 style={[
//                     styles.inputView,
//                     style,
//                     isFocus && { backgroundColor: appColors.border },
//                     isFocus && { borderColor: appColors.primary }

//                 ]}
//             >
//                 <TextInput
//                     editable={editable}
//                     value={value}
//                     onChangeText={onChangeText}
//                     placeholder={placeholder}
//                     onFocus={() => focus(true)}
//                     secureTextEntry={secureTextEntry}
//                     onBlur={() => focus(false)}
//                     placeholderTextColor={appColors.content}
//                     style={[styles.input, style,
//                     ]}
//                     keyboardType={keyboardType}
//                     maxLength={maxLength}
//                 />
//                 <TouchableOpacity style={styles.leftIcon} onPress={onPress} activeOpacity={0.7}>
//                     {leftIcon}
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.rightIcon} onPress={onPress1} activeOpacity={0.7}>
//                     {isText ? <Text style={styles.text}>{props.text}</Text> :
//                         rightIcon}
//                 </TouchableOpacity>
//             </View>



//         </View >
//     )
// }





import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import styles from "./styles";
import appColors from "../../theme/appColors";

export function Input({
    placeholder,
    editable = true,
    value,
    keyboardType,
    onChangeText,
    secureTextEntry,
    onPress,
    onPress1,
    isText = false, // Default to false
    maxLength,
    leftIcon,
    rightIcon,
    style,
    text, // Explicitly include the `text` prop
}) {
    const [isFocus, setIsFocus] = useState(false);

    const handleFocus = (value) => {
        setIsFocus(value);
    };

    return (
        <View>
            <View
                style={[
                    styles.inputView,
                    style,
                    isFocus && { backgroundColor: appColors.border },
                    isFocus && { borderColor: appColors.primary },
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
                    placeholderTextColor={appColors.content}
                    style={[styles.input, style]}
                    keyboardType={keyboardType}
                    maxLength={maxLength}
                />
                {leftIcon && (
                    <TouchableOpacity style={styles.leftIcon} onPress={onPress} activeOpacity={0.7}>
                        {leftIcon}
                    </TouchableOpacity>
                )}
                {rightIcon || isText ? (
                    <TouchableOpacity style={styles.rightIcon} onPress={onPress1} activeOpacity={0.7}>
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
