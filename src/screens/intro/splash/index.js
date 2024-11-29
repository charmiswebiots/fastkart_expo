import { View, Image, SafeAreaView } from "react-native";
import React from "react";
import styles from "./styles";
import images from "../../../utils/images";
import { useEffect } from "react";



export function Splash({navigation}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Login");
        }, 1000);
    }, []);

    return (
        <SafeAreaView style={[styles.mainView]}>
            <Image source={images.splash} style={{ width: '100%' }} />
            <View style={styles.logo}>
                <Image source={images.logo} style={styles.img} />
            </View>
        </SafeAreaView>
    )
}

// import { View, Text } from "react-native";
// import React from "react";

// export function Splash() {
//     return (
//         <View style={{ backgroundColor: 'red', flex: 1 }}>
//             <Text style={{ color: 'blue' }}>dvf</Text>
//         </View>
//     )
// }