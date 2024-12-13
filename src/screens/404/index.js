import { View, SafeAreaView, Text, Image } from "react-native";
import { HomeHeader, Button } from "../../commonComponents";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function NotFound({navigation}) {
    const {t}=useValues()
    const home=()=>{
        navigation.navigate('Home')
    }
    const {colors}=useTheme()
    return (
        <SafeAreaView style={[styles.mainView]}>
            <HomeHeader />
            <View style={styles.subView}>
                <Image resizeMode='contain' source={images.notFound} />
                <Text style={[styles.notFound,{color:colors.text}]}>{t('404.pageNotFound')}</Text>
                <View style={styles.line} />
                <Text style={styles.notExist}>{t('404.pageNotExist')}</Text>
                <Button text={t('404.backToHome')} style={styles.btn} color={appColors.white} onPress={home}
                />
            </View>
        </SafeAreaView>
    )
}