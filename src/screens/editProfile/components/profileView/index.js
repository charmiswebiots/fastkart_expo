import { TouchableOpacity ,View,Image,Text} from "react-native";
import styles from "./styles";
import images from "../../../../utils/images";
import { Icons } from "../../../../utils/icons";


export function ProfileView() {
    return (
        <TouchableOpacity style={styles.dataView} activeOpacity={0.8}>
            <View>
                <Image source={images.demoProfile} style={styles.demoImg} />
                <View style={[styles.editProfile]}>
                    <Icons.editProfileImage />
                </View>
            </View>
            <Text style={[styles.name]}>Andrea Joanne</Text>
            <Text style={styles.demoMail}>andreajoanne@gmail.com</Text>
        </TouchableOpacity>
    )
}