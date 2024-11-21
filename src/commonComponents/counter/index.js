import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";
import { useState } from "react";

export function Counter(props) {

    const [count, setCount] = useState(1)

    const increaseCount = () => {
        setCount(count + 1)
    }

    const decreaseCount = () => {
        if (count != 0) {
            setCount(count - 1)

        }
    }
    return (
        <View style={[styles.mainView]}>
            <TouchableOpacity style={[styles.decrease]} onPress={decreaseCount}>
                <Icons.decrease color={props.color} />
            </TouchableOpacity>
            <Text style={[styles.txt]}>{count}</Text>
            <TouchableOpacity style={[ styles.increase]} onPress={increaseCount}>
                <Icons.increase color={props.color} />
            </TouchableOpacity>
        </View>
    )
}