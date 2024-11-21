import { View, SafeAreaView, Text, Image } from "react-native";
import { HomeHeader, Button } from "../../commonComponents";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";

export function NotFound() {
    return (
        <SafeAreaView style={[styles.mainView]}>
            <HomeHeader />
            <View style={styles.subView}>
                <Image resizeMode='contain' source={images.notFound} />
                <Text style={[styles.notFound]}>PAGE NOT FOUND</Text>
                <View style={styles.line} />
                <Text style={styles.notExist}>We Are Sorry But The Page You Are Looking For Doesn't Exist Or Has Been Removed. Please Check Back Later Or Search Again.</Text>
                <Button text={'Back to Home'} style={styles.btn} color={appColors.white}
                />
            </View>
        </SafeAreaView>
    )
}