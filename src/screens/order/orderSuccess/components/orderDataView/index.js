import { View ,Text} from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";

export function OrderDataView() {
    const {colors}=useTheme()
    const {viewRtlStyle,textRtlStyle}=useValues()
    return (
        <View style={[styles.totalView,{flexDirection:viewRtlStyle}]}>
            <View style={{ flexDirection:viewRtlStyle }}>
                <View style={styles.optionView}>
                    <Icons.calender  />
                </View>
                <View style={ styles.option}>
                    <Text style={[styles.orderDate,{color:colors.text}]}>Order Date</Text>
                    <Text style={styles.date}>Sun, 14 Apr, 19:12</Text>
                </View>
            </View>
            <View style={{ flexDirection: viewRtlStyle }}>
                <View style={styles.optionView}>
                    <Icons.orderId />
                </View>
                <View style={styles.option}>
                    <Text style={[styles.orderDate,{color:colors.text},{textAlign:textRtlStyle}]}>Order ID</Text>
                    <Text style={styles.date}>#548475151</Text>
                </View>
            </View>
        </View>
    )
}