import { View,Text } from "react-native";
import styles from "./styles";
import { useValues } from "../../../../../utils/context";

export function EstimatedDeliveryView() {
    const {t}=useValues()
    return (
        <View>
            <Text style={styles.deliveryTime}>{t('orderTrackingPage.estimatedDeliveryTime')}</Text>
            <Text style={styles.trackingTime}>{t('orderTrackingPage.trackingTime')}</Text>
        </View>
    )
}