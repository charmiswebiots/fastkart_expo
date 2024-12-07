import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        width: '92%',
        marginTop: windowHeight(15),
        paddingVertical: windowHeight(5),
        borderRadius: windowHeight(10),
        alignItems: 'center',
        alignSelf: 'center',
    },
    img: {
        alignSelf: 'center',
        width: '100%',
        marginTop: windowHeight(15.8)
    },
    image: {
        width: windowWidth(80),
        height: windowHeight(80),
        left:windowWidth(23),
        paddingHorizontal:windowWidth(30)
    },
    lineView: {
        width: windowWidth(1),
        height: windowHeight(50),
        backgroundColor: appColors.placeholder,
        left:windowWidth(38)
    },
    counterView: {
        marginHorizontal:windowWidth(57),
        justifyContent: 'center'
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',

    },
    weight: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.content
    },
    priceView: {
        justifyContent: 'space-between',
        width: windowWidth(290),
        marginTop: windowHeight(6),
    },
    discountPriceView: {
        alignItems: 'center',
    },
    price: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishBold',
    },
    discountView: {
        backgroundColor: appColors.primary,
        width: windowWidth(88),
        height: windowHeight(20),
        borderRadius: windowHeight(24),
        marginHorizontal: windowHeight(8),
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(15),
        alignItems: 'center',
    },
    discount: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: appColors.white,
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT15
    },
})
export default styles;