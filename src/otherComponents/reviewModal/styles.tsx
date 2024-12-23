import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    list: {
        marginBottom: windowHeight(40)
    },
    review: {
        marginTop: windowHeight(0),
        padding: windowWidth(20),
        borderRadius: windowHeight(10)
    },
    review: {
        marginTop: windowHeight(13),
        paddingVertical: windowHeight(9),
        borderRadius: windowHeight(10),
    },
    allReviewText: {
        fontFamily: 'mulishSemiBold', fontSize: fontSizes.FONT20
    },
    allReviewView: {
        justifyContent: 'space-between', alignItems: 'center'
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
        marginHorizontal: windowHeight(5)
    },
    star: {
        width: windowWidth(19),
        height: windowHeight(17),
        marginHorizontal: windowWidth(3),
        left: windowHeight(2)
    },
    reviewTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        width: '100%',
        textAlign: 'left',
        marginTop: windowHeight(6),
        marginHorizontal: windowHeight(13),

    },
})
export default styles;