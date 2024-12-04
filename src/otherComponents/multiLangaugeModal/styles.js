import { StyleSheet } from "react-native";
import { windowHeight, fontSizes } from "../../theme/appConstant";

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.FONT24,
        fontFamily:'mulishSemiBold',
    },
    icon: {
        alignItems: 'center',
        marginTop: windowHeight(4),
        height: windowHeight(40),
        width: '100%'
    },
})
export default styles;