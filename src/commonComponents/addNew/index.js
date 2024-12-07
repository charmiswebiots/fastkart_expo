import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { useTheme } from "@react-navigation/native";

export function AddNew(props) {
    const {colors}=useTheme()
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[styles.newAddView]}>
            <Text style={styles.addAdd}>+</Text>
            <Text style={styles.addAdd}> {props.text} </Text>
        </TouchableOpacity>
    )
}