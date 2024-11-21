import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default reviewViewStyles = StyleSheet.create({
    reviewView: {
        justifyContent: 'space-between',
        marginTop: windowHeight(20)
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
    },
    seeAll: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary
    },
    list: {
        marginBottom: windowHeight(20)
    },
    review: {
        marginTop: windowHeight(20),
        padding: windowWidth(20),
        borderRadius: windowHeight(10)
    },
    reviewDetail: {
        alignItems: 'center'
    },
    demoProfile: {
        width: windowWidth(70),
        height: windowHeight(70),
        resizeMode: 'contain'
    },
    reviewNameViewRight: {
        marginHorizontal: windowWidth(14)
    },
    reviewName: {
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT20,
    },
    star: {
        width: windowWidth(19),
        height: windowHeight(17),
        marginLeft: windowWidth(4)
    },
    reviewTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        width: '100%'
    },
});