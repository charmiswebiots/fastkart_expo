import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { orderHistoryTime } from "../../../../data";
import { useState } from "react";

export function OrderHistoryTime() {

    const [selected, setSelected] = useState(0)

    const changeSelected = (key) => {
        setSelected(key)
    }

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[styles.scrollView]}>
            {
                orderHistoryTime.map((item, key) =>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => changeSelected(key)}>
                        <Text
                            style={[
                                styles.time,
                                key === selected && styles.primaryText
                            ]}
                        >
                            {item.time}
                        </Text>                    </TouchableOpacity>
                )
            }
        </ScrollView>
    )
}