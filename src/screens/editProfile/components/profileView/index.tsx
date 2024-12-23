import { TouchableOpacity, View, Image, Text } from "react-native";
import styles from "./styles";
import images from "../../../../utils/images";
import { Icons } from "../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";


export function ProfileView() {
    const {t}=useValues()
    const { colors } = useTheme()
    return (
        <TouchableOpacity style={styles.dataView} activeOpacity={0.8}>
            <View>
                <Image source={images.demoProfile} style={styles.demoImg} />
                <View style={[styles.editProfile]}>
                    <Icons.editProfileImage />
                </View>
            </View>
            <Text style={[styles.name, { color: colors.text }]}>{t('orderTrackingPage.name')}</Text>
            <Text style={styles.demoMail}>{t('editprofilePage.demoemail')}</Text>
        </TouchableOpacity>
    )
}