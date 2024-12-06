import React from "react";
import { Image, View, ScrollView, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import images from "../../../utils/images";
import { TitleView, DetailsView } from './components/index';
import { Button } from "../../../commonComponents";
import appColors from "../../../theme/appColors";
import { ContinueView } from "../components";
import { useNavigation } from "@react-navigation/native";
import {useTheme} from "@react-navigation/native";


export function Login() {
    const navigation = useNavigation()
    const {colors}=useTheme()

    const Home = () => {
        navigation.navigate('Home')
    }
    const register = () => {
        navigation.navigate('Register')
    }

    return (
        <SafeAreaView style={styles.mainView}>
            <Image source={images.login} resizeMode='stretch' style={styles.loginView} />
            <View style={[styles.subView,{backgroundColor:colors.background}]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TitleView props={'Online Supermarket for all your daily needs. you are just One Click away from your all needs at your door step.'} />
                    <View style={styles.container}>
                        <DetailsView />
                    </View>
                    <Button text={'Sign in'} style={styles.btn}
                        color={appColors.white} onPress={Home} />
                    <ContinueView txt={'If you are new, Create Now'} signTxt={'Or sign in with'} onPress={register}  onPress1={Home} style={styles.guest} />
                </ScrollView>
            </View>
            <TouchableOpacity onPress={Home}>
                <Text style={[styles.guest,{color:colors.text,backgroundColor:colors.background}]}>Continue as guest</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}