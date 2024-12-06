import { View, SafeAreaView, Text, Image } from "react-native";
import { HomeHeader, Button } from "../../commonComponents";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";
import { useTheme } from "@react-navigation/native";

export function NotFound({navigation}) {
    const home=()=>{
        navigation.navigate('Home')
    }
    const {colors}=useTheme()
    return (
        <SafeAreaView style={[styles.mainView]}>
            <HomeHeader />
            <View style={styles.subView}>
                <Image resizeMode='contain' source={images.notFound} />
                <Text style={[styles.notFound,{color:colors.text}]}>PAGE NOT FOUND</Text>
                <View style={styles.line} />
                <Text style={styles.notExist}>We Are Sorry But The Page You Are Looking For Doesn't Exist Or Has Been Removed. Please Check Back Later Or Search Again.</Text>
                <Button text={'Back to Home'} style={styles.btn} color={appColors.white} onPress={home}
                />
            </View>
        </SafeAreaView>
    )
}