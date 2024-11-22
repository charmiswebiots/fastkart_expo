import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";


export default reviewViewStyles = StyleSheet.create({
    reviewView: {
        justifyContent: 'space-between',
        marginTop: windowHeight(20)
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
    },
    seeAll: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.primary
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
        fontFamily: 'mulishBold',
        fontSize: fontSizes.FONT20,
    },
    star: {
        width: windowWidth(19),
        height: windowHeight(17),
        marginLeft: windowWidth(4)
    },
    reviewTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        color: appColors.content,
        width: '100%'
    },
});