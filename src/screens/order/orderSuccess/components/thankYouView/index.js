import { View ,Text} from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function ThankyouView() {
    const {colors}=useTheme()
    const {t}=useValues()
    return (
        <View>
            <Text style={[styles.thankyou,{color:colors.text}]}>{t('orderSuccessPage.thankYouforOrder')}</Text>
            <Text style={styles.orderSuccessfull}>{t('orderSuccessPage.orderSuccessfull')}</Text>
        </View>
    )
}