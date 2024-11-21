import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles = StyleSheet.create({
    mainView:{
        backgroundColor:appColors.white,
        flex: 1
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between'
    },
    filter: {
        fontSize: fontSizes.FONT24,
        color: appColors.primary,
        fontFamily: 'mulishSemiBold',
    },
    coupon: {
        marginTop: windowHeight(20)
    },
})
export default styles;