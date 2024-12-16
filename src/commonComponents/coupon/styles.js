import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    containerView: {
        height: windowHeight(82),
    },
    mainView: {
        width: '99%',
        alignItems: 'center',
        alignSelf: 'center',
        left: windowHeight(2),
        height: windowHeight(90),
        justifyContent: 'center'
    },
    subView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '86%',
        alignSelf: 'center',
    },
    view: {
        alignItems: 'center',
        right: windowHeight(1.5),
    },
    priceTxt: {
        color: appColors.primary,
        fontFamily: 'quickSandBold',
        fontSize: fontSizes.FONT50
    },
    offView: {
        marginHorizontal: windowHeight(2),
    },
    percent: {
        color: appColors.primary,
        fontFamily: 'quickSandMedium',
        fontSize: fontSizes.FONT20,
        top: windowHeight(2),
    },
    off: {
        color: appColors.primary,
        fontFamily: 'quickSandMedium',
        fontSize: fontSizes.FONT16,
        bottom: windowHeight(1.5),
    },
    titleTxt: {
        fontFamily: 'quickSandMedium',
        fontSize: fontSizes.FONT18,
    },
    useCode: {
        fontSize: fontSizes.FONT16,
        fontFamily: 'quickSandMedium',
        width: windowWidth(92),
        textAlign: 'center',
        color: appColors.secondBlack,
    },
    code: {
        fontSize: fontSizes.FONT16,
        color: appColors.white,
        fontFamily: 'quickSandMedium',
        backgroundColor: appColors.primary,
        textAlign: 'center',
        borderRadius: windowHeight(20),
        paddingVertical: windowHeight(2),
        marginTop: windowHeight(4),
        width: windowWidth(90)
    },
    titleView: {
        marginHorizontal: windowHeight(2),
    },
    loaderContainer: {
        width: '95%',
        marginTop: windowHeight(1.8),
        paddingVertical: windowHeight(35),
        borderRadius: windowHeight(10),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: appColors.gray,
    },
    skeletonImage: {
        width: windowWidth(100),
        height: windowHeight(60),
        backgroundColor: 'red',
        borderRadius: windowHeight(2.5),
        alignItems: "center",
        alignSelf: 'center',
        right:'100%',
        // left: windowWidth(20),
        // paddingHorizontal: windowHeight(10),
    },
})
export default styles;