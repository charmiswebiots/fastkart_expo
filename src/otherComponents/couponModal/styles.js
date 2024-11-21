import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        position: 'absolute',
        bottom: 0,
        height:"61%",
        backgroundColor:appColors.primary,
        width: '100%'
    },
    offView: {
        backgroundColor: appColors.primary,
        width: '100%',
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        padding: windowHeight(13)
    },
    flatTxt: {
        color: appColors.white,
        fontSize: fontSizes.FONT28,
        fontFamily: 'quickSandMedium',
        textAlign:'left',
        marginTop:windowHeight(4),
    },
    offTxt: {
        color: appColors.white,
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        textAlign:'left',
        marginTop:windowHeight(2),


    },
    codeView: {
        width: '100%',
        borderRadius: windowHeight(6),
        backgroundColor: '#38BEAD',
        paddingVertical: windowHeight(13),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        paddingHorizontal: windowWidth(26),
        marginTop: windowHeight(10)
    },
    codeTxt: {
        color: appColors.white,
        fontFamily: 'mulishBold',
        fontSize: fontSizes.FONT19
    },
    copyCode: {
        color: appColors.primary,
        backgroundColor: appColors.white,
        borderRadius: windowHeight(20),
        paddingVertical: windowHeight(5),
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        paddingHorizontal: windowWidth(25)
    },
    txt: {
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        fontSize: fontSizes.FONT20,
        textAlign:'left',
    },
    keyView: {
        width: '96.5%',
        flexDirection:'row',
        marginTop: windowHeight(8)
    },
    termsView: {
        padding: windowHeight(14),
        backgroundColor:appColors.white,
    },
})
export default styles;