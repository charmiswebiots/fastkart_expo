import { View,Text,TouchableOpacity } from "react-native";
import styles from "./styles";

export function NotFound() {
    return (
        <View style={styles.mainView}>
            <Text style={[styles.didntFind]}>Didn’t find what you were looking for?</Text>
            <TouchableOpacity style={[styles.textView]}>
                <Text style={styles.text}>Browse Category</Text>
            </TouchableOpacity>
        </View>
    )
}