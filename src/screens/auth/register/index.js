import React from "react";
import { View, SafeAreaView, TouchableOpacity, ScrollView, Image, Text } from "react-native";
import images from "../../../utils/images";
import { TitleView } from "../login/components";
import { Button } from "../../../commonComponents";
import { ContinueView } from "../components";
import { DetailsView } from "./components/detailsView";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";


export function Register() {
    const { colors } = useTheme()
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
            <View style={[styles.subView, { backgroundColor: colors.background }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TitleView props={t('loginNRegister.onlineSupermarket')} />
                    <View style={styles.container}>
                        <DetailsView />
                    </View>
                    <Button text={t('register.signUp')} style={styles.btn}
                        color={appColors.white} onPress={login} />
                    <View style={styles.continue}>
                        <ContinueView txt={t('register.accountSignIn')} signTxt={t('register.signUpWith')} onPress={login} />
                    </View>
                </ScrollView>
            </View>

            <TouchableOpacity onPress={home}>
                <Text style={[styles.guest, { backgroundColor: colors.background, color: colors.text }]}>{t('loginNRegister.continueAsGuest')}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}