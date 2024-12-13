import { View ,Image,Text,TouchableOpacity} from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { Icons } from "../../../../../utils/icons";
import appColors from "../../../../../theme/appColors";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function UserDetailView() {
    const {colors}=useTheme()
    const {t}=useValues()
    return (
        <View style={[styles.dataView]}>
            <View style={[styles.profileView]}>
                <Image source={images.demoProfile} style={styles.profile} />
                <View style={styles.nameView}>
                    <Text style={[styles.name,{color:colors.text}]}>{t('orderTrackingPage.name')}</Text>
                    <Text style={[styles.courier]}>{t('orderTrackingPage.courier')}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity activeOpacity={0.7} style={[styles.option,{backgroundColor:appColors.primary}]}>
                    <Icons.call />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} style={[styles.chat, styles.option, styles.chatLeft]}>
                    <Icons.chat />
                </TouchableOpacity>
            </View>
        </View>
    )
}