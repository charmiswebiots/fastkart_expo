import { View ,Image,Text,TouchableOpacity} from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { Icons } from "../../../../../utils/icons";
import appColors from "../../../../../theme/appColors";

export function UserDetailView() {
    return (
        <View style={[styles.dataView]}>
            <View style={[styles.profileView]}>
                <Image source={images.demoProfile} style={styles.profile} />
                <View style={styles.nameView}>
                    <Text style={[styles.name]}>Andrea Joanne</Text>
                    <Text style={[styles.courier]}>Courier</Text>
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