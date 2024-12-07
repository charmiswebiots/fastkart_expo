import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    reviewView: {
        justifyContent: 'space-between',
        marginTop: windowHeight(20),
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.black,
    },
    seeAll: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.primary
    },
    review: {
        marginTop: windowHeight(15),
        paddingVertical: windowHeight(9),
        borderRadius: windowHeight(10),
    },
    reviewDetail: {
        alignItems: 'center',
        height: windowHeight(43),
        marginHorizontal: windowHeight(13),
    },
    demoProfile: {
        width: windowWidth(60),
        height: windowHeight(60),
        resizeMode: 'contain'
    },
    reviewNameViewRight: {
        marginHorizontal: windowWidth(14)
    },
    reviewName: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT20,
        color: appColors.black,
    },
    star: {
        width: windowWidth(19),
        height: windowHeight(17),
        marginHorizontal:windowWidth(2),
    },
    reviewTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        width: '100%',
        marginTop: windowHeight(6),
        marginHorizontal: windowHeight(13),
    },
})
export default styles;