import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        width: '95%',
        marginTop: windowHeight(15),
        paddingVertical: windowHeight(5),
        borderRadius: windowHeight(10),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: appColors.gray,
    },
    image: {
        width: windowWidth(80),
        height: windowHeight(80),
        left: windowWidth(20)
    },
    lineView: {
        width: windowWidth(1),
        height: windowHeight(50),
        backgroundColor: appColors.placeholder,
        marginHorizontal: windowHeight(14),
        left: windowHeight(12),
    },
    counterView: {
        paddingHorizontal: windowHeight(10),
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
        paddingHorizontal: windowWidth(17),
        alignItems: 'center',
    },
    discount: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: appColors.white,
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT15
    },
    loaderContainer: {
        width: '95%',
        marginTop: windowHeight(15),
        paddingVertical: windowHeight(14.8),
        borderRadius: windowHeight(10),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: appColors.gray,
    },
    skeletonImage: {
        width: windowWidth(80),
        height: windowHeight(60),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(2.5),
        alignItems: "center",
        alignSelf: 'center',
        left: windowWidth(20),
        paddingHorizontal: windowHeight(10),
    },
    skeletonText: {
        width: windowWidth(285),
        height: windowHeight(15),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(2),
        bottom: windowHeight(19),
        marginHorizontal: windowHeight(25)
    },
    skeletonText1: {
        width: windowWidth(80),
        height: windowHeight(12.5),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(4),
        right: windowHeight(222),
        borderRadius: windowHeight(2),
    },
    skeletonText2: {
        width: windowWidth(80),
        height: windowHeight(12.5),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(48),
        right: '458%',
        borderRadius: windowHeight(2),
    },
    skeletonText3: {
        width: windowWidth(80),
        height: windowHeight(12.5),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(48),
        right: '440%',
        borderRadius: windowHeight(2),
    },
    skeletonText4: {
        width: windowWidth(80),
        height: windowHeight(12.5),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(48),
        right: '380%',
        borderRadius: windowHeight(2),
    }
})

export default styles;
