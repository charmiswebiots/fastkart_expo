import React from "react";
import { Image, View, ScrollView, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import images from "../../../utils/images";
import { TitleView, DetailsView } from './components/index';
import { Button } from "../../../commonComponents";
import appColors from "../../../theme/appColors";
import { ContinueView } from "../components";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/type";

type loginProps = NativeStackNavigationProp<RootStackParamList>


export function Login() {
    const navigation = useNavigation<loginProps>();
    const { colors } = useTheme();
    const { t } = useValues();

    const Home = () => {
        navigation.navigate('Home');
    };

    const register = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={styles.mainView}>
            <Image source={images.login} resizeMode='stretch' style={styles.loginView} />
            <View style={[styles.subView, { backgroundColor: colors.background }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TitleView props={t('loginNRegister.onlineSupermarket')} />
                    <View style={styles.container}>
                        <DetailsView />
                    </View>
                    <Button text={t('login.signIn')} style={styles.btn}
                        color={appColors.white} onPress={Home} />
                    <ContinueView txt={t('login.createAccount')} signTxt={t('login.signInWith')} onPress={register} onPress1={Home} style={styles.guest} />
                </ScrollView>
            </View>
            <TouchableOpacity onPress={Home}>
                <Text style={[styles.guest, { color: colors.text, backgroundColor: colors.background }]}>{t('loginNRegister.continueAsGuest')}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}