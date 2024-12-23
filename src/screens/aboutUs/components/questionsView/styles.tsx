import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    whoWeAre: {
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishBold',
        marginHorizontal: windowWidth(20),
        marginBottom: windowHeight(5),
        marginTop: windowHeight(20),
    },
    whoAreWe: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        lineHeight: fontSizes.FONT20 * 1.5,
        marginHorizontal: windowWidth(20),
        color: appColors.content
    },
    howIOrder: {
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishBold',
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(30)
    },
    questionView: {
        justifyContent: 'center',
        marginTop: windowHeight(10)
    },
    answerView: {
        marginTop: windowHeight(10),
        left: windowWidth(10),
        marginHorizontal: windowHeight(15),
        paddingVertical: windowHeight(20),
        borderRadius: windowHeight(8),
        alignSelf: "center",
        paddingHorizontal: windowWidth(30),
    },
    question: {
        fontFamily: 'mulishSemiBold',
        color: appColors.text,
        left: windowHeight(5),
        fontSize: fontSizes.FONT22
    },
    answer: {
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        top: windowHeight(3),
        left: windowHeight(5),
        width: windowWidth(350),
        lineHeight: fontSizes.FONT20 * 1.35,
        fontSize: fontSizes.FONT20
    },
    keyView: {
        position: 'absolute',
        width: windowWidth(40),
        height: windowHeight(27),
        backgroundColor: appColors.primary,
        borderRadius: windowHeight(4),
        alignItems: 'center',
        justifyContent: 'center',
        left: windowWidth(22)
    },
    key: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.white
    },
})
export default styles;