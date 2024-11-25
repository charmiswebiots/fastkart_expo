import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        width: "100%",
        height: windowHeight(220),
        marginBottom: windowHeight(10),
        borderRadius: windowHeight(10),
        paddingHorizontal: windowWidth(14),
        
    },
    sliderView: {
        justifyContent: 'center',
        alignItems:'center',
        alignContent:'center',
        marginHorizontal:windowHeight(7),
    },
    image: {
        width: windowWidth(412),
        height: windowHeight(190),
        marginTop: windowHeight(18),
        resizeMode:'cover',
        borderRadius: windowHeight(10),
        
    },
    contentView: {
        position: 'absolute',
        alignSelf: 'center',
        right:windowHeight(45)
    },
    title: {
        fontSize: fontSizes.FONT23,
        width: windowWidth(320),
        fontFamily: 'quickSandBold',
        alignSelf: 'center',
        top: windowHeight(8)
    },
    subTitle: {
        fontSize: fontSizes.FONT21,
        width: windowWidth(320),
        fontFamily: 'quickSandMedium',
        alignSelf: 'center',
        textAlign:'left',
        color: appColors.content,
        top: windowHeight(8)
    },
    content: {
        top: 0,
        left: 30,
        bottom: 0,
        right: 30
    },
    shopNowView: {
        height: windowHeight(25),
        width: windowWidth(138),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(4),
        marginTop: windowHeight(18),
        backgroundColor:appColors.primary,
    },
    shopNow: {
        fontFamily: 'mulishBold',
        color:appColors.white,
        fontSize: fontSizes.FONT17,
    },
})
export default styles;