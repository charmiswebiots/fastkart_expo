import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    counterView: {
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: appColors.primary,
        width: '93%',
        bottom:windowHeight(25),
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
    addToCart: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        color: appColors.white,
        paddingHorizontal:windowHeight(5)
    },
})
export default styles;