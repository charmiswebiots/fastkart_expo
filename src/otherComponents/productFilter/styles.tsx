import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    category: {
        justifyContent: 'space-between',
    },
    categoryTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
    },
    reset: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.primary
    },
    packSize: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginTop: windowHeight(70),
        marginBottom: windowHeight(10),
    },
    list: {
        marginTop: windowHeight(20),
    },
    seprator: {
        width: windowWidth(10),
        height: windowHeight(10)
    },
    sizeView: {
        width: windowWidth(210),
        height: windowHeight(40),
        borderWidth: 1,
        borderColor: appColors.border,
        borderRadius: windowHeight(4),
        justifyContent: 'center',
        alignItems: 'center'
    },
    size: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
    },
    priceRange: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginTop: windowHeight(20),
    },
    list: {
        justifyContent: 'space-between'
    },
})
export default styles;