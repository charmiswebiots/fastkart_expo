import { View ,Image,Text} from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";

export function AddressView() {
    const {colors}=useTheme()
    return (
        <View style={[styles.location]}>
            <View>
                <Image source={images.seprator} style={styles.sepratorImg} />
                <View style={styles.homeView}>
                    <View style={[styles.option]}>
                        <Icons.home  />
                    </View>
                    <View style={[styles.option]}>
                        <Icons.location color />
                    </View>
                </View>
            </View>
            <View style={[styles.storeLocation, styles.storeRight]}>
                <View>
                    <Text style={[styles.locationTxt,{color:colors.text}]}>8857 Morris Rd. ,Charlottesville, VA 22901</Text>
                    <Text style={[styles.storeLocationTxt]}>Store Location</Text>
                </View>
                <View>
                    <Text style={[styles.locationTxt,{color:colors.text}]}>8857 Morris Rd. ,Charlottesville, VA 22901</Text>
                    <Text style={[styles.storeLocationTxt]}>Delivery Location</Text>
                </View>
            </View>
        </View>
    )
}