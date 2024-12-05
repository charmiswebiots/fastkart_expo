import React from "react";
import { View, SafeAreaView, TouchableOpacity, ScrollView, Image, Text } from "react-native";
import images from "../../../utils/images";
import { TitleView } from "../login/components";
import { Button } from "../../../commonComponents";
import { ContinueView } from "../components";
import { DetailsView } from "./components/detailsView";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";


export function Register() {
    const navigation = useNavigation()

    const login = () => {
        navigation.navigate('Login')
    }

    const home = () => {
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView style={styles.mainView}>
            <Image source={images.login} resizeMode='stretch' style={styles.loginView} />
            <View style={[styles.subView]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TitleView props={'Online Supermarket for all your daily needs. you are just One Click away from your all needs at your door step.'} />
                    <View style={styles.container}>
                        <DetailsView />
                    </View>
                    <Button text={'Sign Up'} style={styles.btn}
                        color={appColors.white} onPress={login} />
                    <View style={styles.continue}>
                        <ContinueView txt={'Already have an Account? Sign In'} signTxt={'Or sign in with'} onPress={login} />
                    </View>
                </ScrollView>
            </View>

            <TouchableOpacity onPress={home}>
                <Text style={[styles.guest]}>Continue as guest</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}