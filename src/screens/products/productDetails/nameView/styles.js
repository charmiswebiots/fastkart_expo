import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";
import Appcolor from '../../../../theme/colors';

export default productDetailsStyles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulishBold,
    },
    sideArrow: {
        flexDirection: 'row'
    },
    ratingsView: {
        marginVertical: windowHeight(10)
    },
    star: {
        width: windowWidth(19),
        height: windowHeight(17),
        marginLeft: windowWidth(4)
    },
    ratings: {
        fontSize: fontSizes.FONT16,
        fontFamily: Commonfonts.mulish,
        marginLeft: windowWidth(10)
    },
    view: {
        marginTop: windowHeight(2)
    },
    originalPrice: {
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        marginHorizontal: windowWidth(10),
        textDecorationLine: 'line-through'
    },
    discount: {
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary,
    },
});