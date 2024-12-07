import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    scrollView: {
        paddingBottom: windowHeight(80)
    },
    list: {
        width: '91%',
        alignSelf: 'center',
        marginTop: windowHeight(15),
        justifyContent: 'space-between',
        borderColor: appColors.primary,
        borderRadius: windowHeight(12),
        padding: windowHeight(9.5),
    },
    optionView: {
        alignItems: 'center'
    },
    optionTxt: {
        fontSize: fontSizes.FONT23,
        fontFamily: 'mulishBold',
        left: windowWidth(10)
    },
    default: {
        color: appColors.white,
        backgroundColor: appColors.primary,
        paddingHorizontal: windowWidth(20),
        borderRadius: windowHeight(14),
        paddingVertical: windowHeight(2),
        fontFamily: 'mulishSemiBold',
        left: windowHeight(10)
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginTop: windowHeight(10)
    },
    add: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        width: windowWidth(290),
        marginTop: windowHeight(6)
    },
    addMap: {
        width: windowWidth(100),
        height: windowHeight(100),
        resizeMode: 'contain'
    },
})
export default styles;