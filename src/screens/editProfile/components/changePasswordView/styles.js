import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    changePassword: {
        marginTop: windowHeight(17),
        borderRadius: windowWidth(6),
        marginHorizontal: windowWidth(20)
    },
    changePasswordTxt: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        top:windowHeight(8),
        textAlign:"left",
        marginHorizontal:windowHeight(11),
    },
    inputView: {
        marginHorizontal:windowHeight(11),
        height: windowHeight(70),
        width:windowWidth(440),
        backgroundColor:appColors.gray,
        borderColor:appColors.border,
        borderRadius: windowHeight(6),
        borderWidth:windowHeight(1.2),
        alignSelf: 'center',
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
    },
    input: {
        height: windowHeight(45),
        fontSize: fontSizes.FONT19,
        top:windowHeight(2),
        fontFamily: 'mulishSemiBold',
        marginHorizontal:windowHeight(9),

    },
    leftIcon: {
        position: 'absolute',
        alignSelf:"flex-end",
        marginTop:windowHeight(25),
        paddingHorizontal:windowHeight(13),
    },
})
export default styles;