import { View ,Text} from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function OrderDataView() {
    const {colors}=useTheme()
    const {viewRtlStyle,textRtlStyle,t}=useValues()
    return (
        <View style={[styles.totalView,{flexDirection:viewRtlStyle}]}>
            <View style={{ flexDirection:viewRtlStyle }}>
                <View style={styles.optionView}>
                    <Icons.calender  />
                </View>
                <View style={ styles.option}>
                    <Text style={[styles.orderDate,{color:colors.text}]}>{t('orderSuccessPage.orderDate')}</Text>
                    <Text style={styles.date}>{t('orderSuccessPage.date')}</Text>
                </View>
            </View>
            <View style={{ flexDirection: viewRtlStyle }}>
                <View style={styles.optionView}>
                    <Icons.orderId />
                </View>
                <View style={styles.option}>
                    <Text style={[styles.orderDate,{color:colors.text},{textAlign:textRtlStyle}]}>{t('orderSuccessPage.orderID')}</Text>
                    <Text style={styles.date}>{t('orderSuccessPage.id')}</Text>
                </View>
            </View>
        </View>
    )
}