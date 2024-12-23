import { StyleSheet } from "react-native";
import { windowHeight, fontSizes } from "../../theme/appConstant";

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.FONT24,
        fontFamily: 'mulishSemiBold',
    },
    icon: {
        alignItems: 'center',
        marginTop: windowHeight(10)
    },
})
export default styles;