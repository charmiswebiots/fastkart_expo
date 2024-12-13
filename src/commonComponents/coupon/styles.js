import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    containerView:{
        height:windowHeight(82),
    },
    mainView: {
        width: '99%',
        alignItems:'center',
        alignSelf:'center',
        left:windowHeight(2),
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
        right:windowHeight(1.5),
    },
    priceTxt: {
        color: appColors.primary,
        fontFamily: 'quickSandBold',
        fontSize: fontSizes.FONT50
    },
    offView:{
        marginHorizontal:windowHeight(2),
    },
    percent: {
        color: appColors.primary,
        fontFamily: 'quickSandMedium',
        fontSize: fontSizes.FONT20,
        top:windowHeight(2),
        // left:windowHeight(3)
    },
    off: {
        color: appColors.primary,
        fontFamily: 'quickSandMedium',
        fontSize: fontSizes.FONT16,
        bottom:windowHeight(1.5),
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
        color:appColors.secondBlack,
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
        marginHorizontal:windowHeight(2),
    },
    
})
export default styles;