import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../utils/images";
import { ContinueButton } from "../../../../commonComponents";
import {useTheme} from "@react-navigation/native";


export function ContinueView({txt,signTxt,onPress}) {
    const {colors}=useTheme()
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Text style={styles.createAcc}>{txt}</Text>
            </TouchableOpacity>
            <View style={styles.signInView}>
                <Image source={images.divider} style={styles.img} />
                <Text style={[styles.signIn,{backgroundColor:colors.background}]}>{signTxt}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <ContinueButton  text={'Continue with Phone'} image={images.phone} />
                <View style={styles.btnContainer}>
                <ContinueButton  text={'Continue with Google'} image={images.google}/>
                </View>
            </View>
            <View style={styles.view} />
        </View>
    )
}



