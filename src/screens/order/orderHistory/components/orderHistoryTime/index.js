import { ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { orderHistoryTime } from "../../../../data";
import { useState } from "react";
import { useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import appColors from "../../../../../theme/appColors";

export function OrderHistoryTime() {

    const {isDark}=useValues()
    const {colors}=useTheme()
    const [selected, setSelected] = useState(0);

    const changeSelected = (key) => {
        setSelected(key);
    };

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.scrollView,{backgroundColor:isDark?colors.primary:appColors.gray}]}>
            {orderHistoryTime.map((item, key) => (
                <TouchableOpacity key={key} activeOpacity={0.8} onPress={() => changeSelected(key)}>
                    <Text style={[styles.time,{color:colors.text}, key === selected && styles.primaryText]}>
                        {item.time}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}
