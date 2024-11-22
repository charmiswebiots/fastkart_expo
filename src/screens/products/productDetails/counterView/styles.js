import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

export default counterViewStyles = StyleSheet.create({
    counterView: {
        alignItems: 'center',
        position: 'absolute',
        bottom: windowHeight(80),
        backgroundColor: appColors.primary,
        width: '94%',
        height: windowHeight(56),
        justifyContent: 'space-between',
        paddingRight: windowWidth(10),
        alignSelf: 'center',
        borderRadius: windowHeight(4),
        paddingLeft: windowWidth(20)
    },
    sideArrow: {
        flexDirection: 'row'
    },
    addToCart: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        color: appColors.white,
        marginRight: windowWidth(6)
    },
});