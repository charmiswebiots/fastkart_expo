import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useValues } from "../../../../../utils/context";

export function NotFound() {
    const { textRtlStyle, rtl, t } = useValues()
    return (
        <View style={styles.mainView}>
            <Text style={[styles.didntFind, { textAlign: textRtlStyle }]}>{t('homepage.didntFind')}</Text>
            <TouchableOpacity style={[styles.textView, { alignSelf: rtl ? 'flex-end' : 'flex-start' }]}>
                <Text style={[styles.text, { textAlign: textRtlStyle }]}>{t('homepage.browseCategory')}</Text>
            </TouchableOpacity>
        </View>
    )
}