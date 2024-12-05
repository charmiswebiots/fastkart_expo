import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import { StyleSheet } from "react-native";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    supportView: {
        height: windowHeight(135),
        width: windowWidth(320),
        marginTop: windowHeight(30),
        marginBottom: windowHeight(14),
        borderRadius: windowHeight(14),
        padding: windowHeight(14),
        alignSelf: 'center'
    },
    supportTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.black,
    },
    reactOut: {
        fontSize: fontSizes.FONT17,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        width: windowWidth(300),
        marginTop: windowHeight(6)
    },
    contactUs: {
        marginTop: windowHeight(10),
        height: windowHeight(34),
        width: windowWidth(130),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.primary,
        borderRadius: windowHeight(4)
    },
    contactUsTxt: {
        fontSize: fontSizes.FONT16,
        fontFamily: 'mulishBold',
        color: appColors.white
    },
})
export default styles;