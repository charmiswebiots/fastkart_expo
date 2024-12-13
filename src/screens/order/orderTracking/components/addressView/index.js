import { View ,Image,Text} from "react-native";
import styles from "./styles";
import images from "../../../../../utils/images";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function AddressView() {
    const {colors}=useTheme()
    const {t}=useValues()
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
                    <Text style={[styles.locationTxt,{color:colors.text}]}>{t('orderTrackingPage.location')}</Text>
                    <Text style={[styles.storeLocationTxt]}>{t('orderTrackingPage.storeLocation')}</Text>
                </View>
                <View>
                    <Text style={[styles.locationTxt,{color:colors.text}]}>{t('orderTrackingPage.location')}</Text>
                    <Text style={[styles.storeLocationTxt]}>{t('orderTrackingPage.deliveryLocation')}</Text>
                </View>
            </View>
        </View>
    )
}