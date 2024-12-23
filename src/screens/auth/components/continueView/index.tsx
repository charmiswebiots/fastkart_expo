// import React from "react";
// import { View, TouchableOpacity, Text, Image } from "react-native";
// import styles from "./styles";
// import images from "../../../../utils/images";
// import { ContinueButton } from "../../../../commonComponents";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../../../utils/context";
// import { Icons } from "../../../../utils/icons";


// export function ContinueView({ txt, signTxt, onPress }) {
//     const { colors } = useTheme()
//     const { t } = useValues()
//     return (
//         <View>
//             <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
//                 <Text style={styles.createAcc}>{txt}</Text>
//             </TouchableOpacity>
//             <View style={styles.signInView}>
//                 <Image source={images.divider} style={styles.img} />
//                 <Text style={[styles.signIn, { backgroundColor: colors.background }]}>{signTxt}</Text>
//             </View>
//             <View style={{ alignItems: 'center' }}>
//                 <ContinueButton text={t('loginNRegister.continueWithPhone')} image={<Icons.Phone/>} />
//                 <View style={styles.btnContainer}>
//                     <ContinueButton text={t('loginNRegister.continueWithGoogle')} image={<Icons.googleIcon/>} />
//                 </View>
//             </View>
//             <View style={styles.view} />
//         </View>
//     )
// }






import React, { FC } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import styles from "./styles";
import images from "../../../../utils/images";
import { ContinueButton } from "../../../../commonComponents";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";
import { Icons } from "../../../../utils/icons";

interface ContinueViewProps {
    txt: string;
    signTxt: string;
    onPress: () => void;
}

export const ContinueView: FC<ContinueViewProps> = ({ txt, signTxt, onPress }) => {
    const { colors } = useTheme();
    const { t } = useValues();
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Text style={styles.createAcc}>{txt}</Text>
            </TouchableOpacity>
            <View style={styles.signInView}>
                <Image source={images.divider} style={styles.img} />
                <Text style={[styles.signIn, { backgroundColor: colors.background }]}>{signTxt}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <ContinueButton text={t('loginNRegister.continueWithPhone')} image={<Icons.Phone />} />
                <View style={styles.btnContainer}>
                    <ContinueButton text={t('loginNRegister.continueWithGoogle')} image={<Icons.googleIcon />} />
                </View>
            </View>
            <View style={styles.view} />
        </View>
    );
};