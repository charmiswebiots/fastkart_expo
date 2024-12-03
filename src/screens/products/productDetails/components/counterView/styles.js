import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    counterView: {
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: appColors.primary,
        width: '94%',
        bottom:windowHeight(48),
        height: windowHeight(50),
        justifyContent: 'space-between',
        paddingHorizontal:windowHeight(13),
        alignSelf: 'center',
        borderRadius: windowHeight(4),
    },
    counter:{
        backgroundColor:appColors.white,
        height: windowHeight(32),
        width:windowWidth(120),
        borderRadius:windowHeight(5),
    },
    sideArrow: {
        flexDirection: 'row',
        paddingHorizontal:windowHeight(15)
    },
    addToCart: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        color: appColors.white,
        paddingHorizontal:windowHeight(5)
    },
})
export default styles;