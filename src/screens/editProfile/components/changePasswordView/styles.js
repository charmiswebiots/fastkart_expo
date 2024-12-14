import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";

const styles = StyleSheet.create({
    changePassword: {
        marginTop: windowHeight(17),
        borderRadius: windowWidth(6),
        marginHorizontal: windowWidth(20)
    },
    changePasswordTxt: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        top: windowHeight(8),
        marginHorizontal: windowHeight(12),
    },
    inputView: {
        height: windowHeight(70),
        width: windowWidth(440),
        borderRadius: windowHeight(6),
        borderWidth: windowHeight(1.2),
        alignSelf: 'center',
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
    },
    input: {
        height: windowHeight(45),
        fontSize: fontSizes.FONT19,
        top: windowHeight(2),
        fontFamily: 'mulishSemiBold',
        marginHorizontal: windowHeight(12),
    },
    leftIcon: {
        position: 'absolute',
        marginTop: windowHeight(25),
        paddingHorizontal: windowHeight(8.5)

    },
    rightIcon:{
        position: 'absolute',
        paddingHorizontal:windowHeight(8),
        marginTop: windowHeight(25),
    }
})
export default styles;