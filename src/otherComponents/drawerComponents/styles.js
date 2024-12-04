import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        paddingHorizontal: windowWidth(24),
        marginTop:windowHeight(18)
    },
    switchView: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    supportView: {
        height: windowHeight(140),
        width: windowWidth(320),
        marginTop: windowHeight(30),
        marginBottom: windowHeight(14),
        borderRadius: windowHeight(14),
        padding: windowHeight(16)
    },
    supportTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily:'mulishSemiBold',
        color: appColors.text
    },
    reactOut: {
        fontSize: fontSizes.FONT17,
        fontFamily:'mulishSemiBold',
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
        fontFamily:'mulishBold',
        color: appColors.white
    },

    switch: {
        backgroundColor: appColors.switch,
        bottom:windowHeight(6)
    },
    signOutView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth(180),
        justifyContent: 'center',
        marginBottom: windowHeight(20),
        height: windowHeight(50),
        borderRadius: windowHeight(10),
        marginTop: windowHeight(20)
    },
    signOut: {
        marginLeft: windowWidth(10),
        fontSize: fontSizes.FONT20,
        fontFamily:'mulishSemiBold',
    },
})
export default styles;