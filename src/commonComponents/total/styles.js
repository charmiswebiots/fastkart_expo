import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: windowWidth(22),
        marginTop: windowHeight(38),
        paddingTop: windowHeight(11),
        borderRadius: windowWidth(18),
        backgroundColor: appColors.gray,
    },
    title: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT24,
    },
    data: {
        fontSize: fontSizes.FONT21,
        color: appColors.content,
        fontFamily: 'mulishSemiBold',
    },
    dataView: {
        marginTop: windowHeight(10),
        justifyContent: 'space-between',
    },
    deliveryView: {
        borderBottomWidth: 1,
        paddingBottom: windowHeight(11),
        borderBottomColor: appColors.line
    },
    amountView: {
        marginTop: windowHeight(8),
        justifyContent: 'space-between',
        marginBottom: windowHeight(14),
    },
    amount: {
        fontSize: fontSizes.FONT21,
        fontFamily: 'mulishSemiBold',

    },
    price: {
        fontSize: fontSizes.FONT21,
        color: appColors.primary,
        fontFamily: 'mulishSemiBold',
    },
    coupon: {
        fontSize: fontSizes.FONT21,
        color: appColors.highLight,
        fontFamily: 'mulishSemiBold',
    },
})
export default styles;