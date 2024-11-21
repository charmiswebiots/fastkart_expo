import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default counterViewStyles = StyleSheet.create({
    counterView: {
        alignItems: 'center',
        position: 'absolute',
        bottom: windowHeight(80),
        backgroundColor: Appcolor.primary,
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
        fontFamily: Commonfonts.mulishBold,
        color: Appcolor.white,
        marginRight: windowWidth(6)
    },
});