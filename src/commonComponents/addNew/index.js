import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { useValues } from "../../utils/context";

export function AddNew(props) {
    const {viewRtlStyle}=useValues()

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[styles.newAddView,{flexDirection:viewRtlStyle}]}>
            <Text style={styles.addAdd}>+</Text>
            <Text style={styles.addAdd}> {props.text} </Text>
        </TouchableOpacity>
    )
}