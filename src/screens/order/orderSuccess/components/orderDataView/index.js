import { View ,Text} from "react-native";
import styles from "./styles";
import { Icons } from "../../../../../utils/icons";
import { useTheme } from "@react-navigation/native";

export function OrderDataView() {
    const {colors}=useTheme()
    return (
        <View style={[styles.totalView]}>
            <View style={{ flexDirection:'row' }}>
                <View style={styles.optionView}>
                    <Icons.calender />
                </View>
                <View style={ styles.option}>
                    <Text style={[styles.orderDate,{color:colors.text}]}>Order Date</Text>
                    <Text style={styles.date}>Sun, 14 Apr, 19:12</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={styles.optionView}>
                    <Icons.orderId />
                </View>
                <View style={styles.option}>
                    <Text style={[styles.orderDate,{color:colors.text}]}>Order ID</Text>
                    <Text style={styles.date}>#548475151</Text>
                </View>
            </View>
        </View>
    )
}