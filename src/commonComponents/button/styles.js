import { StyleSheet } from "react-native";
import { windowHeight, fontSizes } from "../../theme/appConstant";

const styles = StyleSheet.create({
    button: {
        borderRadius: windowHeight(6),
        marginTop: windowHeight(23),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight(46),
    },
    buttonText: {
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishSemiBold',
    },
})
export default styles;