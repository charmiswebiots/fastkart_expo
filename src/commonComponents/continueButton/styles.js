import appColors from "../../theme/appColors";
import { windowHeight, windowWidth, fontSizes } from "../../theme/appConstant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    button: {
        width: windowWidth(410),
        height: windowHeight(46),
        borderRadius: windowHeight(6),
        marginTop: windowHeight(28),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonImage: {
        width: windowWidth(26),
        height: windowHeight(20),
        resizeMode: 'contain'
    },
    buttonText: {
        fontSize: fontSizes.FONT20,
        marginHorizontal:windowWidth(10),
        fontFamily: 'mulishSemiBold',
    },
})
export default styles;