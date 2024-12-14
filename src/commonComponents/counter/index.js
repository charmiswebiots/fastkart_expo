import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";
import { useState } from "react";
import { useValues } from "../../utils/context";

export function Counter({color,style}) {
    const {viewRtlStyle}=useValues()

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        if (count != 0) {
            setCount(count - 1)

        }
    }
    return (
        <View style={[styles.mainView,style,{flexDirection:viewRtlStyle}]}>
            <TouchableOpacity style={[styles.decrease]} onPress={decreaseCount}>
                <Icons.decrease color={color} />
            </TouchableOpacity>
            <Text style={[styles.txt]}>{count}</Text>
            <TouchableOpacity style={[ styles.increase]} onPress={increaseCount}>
                <Icons.increase color={color} />
            </TouchableOpacity>
        </View>
    )
}