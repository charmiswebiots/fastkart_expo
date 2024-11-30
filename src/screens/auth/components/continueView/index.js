import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../../../utils/images";
import { ContinueButton } from "../../../../commonComponents";
import { useNavigation } from "@react-navigation/native";


export function ContinueView({txt,signTxt,onPress,guest,onPress1,style}) {

    const navigation=useNavigation()

    const home=()=>{
        navigation.navigate('Home')
    }

    
    return (
        <View>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Text style={styles.createAcc}>{txt}</Text>
            </TouchableOpacity>
            <View style={styles.signInView}>
                <Image source={images.divider} style={styles.img} />
                <Text style={[styles.signIn]}>{signTxt}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <ContinueButton  text={'Continue with Phone'} />
                <View style={styles.btnContainer}>
                <ContinueButton  text={'Continue with Google'} />
                </View>
            </View>
            <TouchableOpacity onPress={onPress1} >
                <Text style={[styles.guest,style]}>{guest}</Text>
            </TouchableOpacity>

            <View style={styles.view} />
           
            
        </View>
    )
}



