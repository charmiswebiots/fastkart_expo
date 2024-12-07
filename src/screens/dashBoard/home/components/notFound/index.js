import { View,Text,TouchableOpacity } from "react-native";
import styles from "./styles";
import { useValues } from "../../../../../utils/context";

export function NotFound() {
    const {textRtlStyle,rtl}=useValues()
    return (
        <View style={styles.mainView}>
            <Text style={[styles.didntFind,{textAlign:textRtlStyle}]}>Didn’t find what you were looking for?</Text>
            <TouchableOpacity style={[styles.textView,{alignSelf:rtl?'flex-end':'flex-start'}]}>
                <Text style={[styles.text,{textAlign:textRtlStyle}]}>Browse Category</Text>
            </TouchableOpacity>
        </View>
    )
}