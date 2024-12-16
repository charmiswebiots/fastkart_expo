import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: windowHeight(7),
    },
    lowestPriceView: {
        marginBottom: windowHeight(10),
        borderWidth: windowHeight(0.8),
        width: windowWidth(170),
        borderRadius: windowHeight(6),
        borderColor: appColors.border,
        marginHorizontal: windowWidth(10)
    },
    image: {
        width: windowWidth(100),
        height: windowHeight(90),
        marginTop: windowHeight(7),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    name: {
        width: windowWidth(150),
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT17,
        height: windowHeight(30),
        bottom: windowHeight(7),
        marginBottom: windowHeight(5),
        marginHorizontal: windowWidth(10)
    },
    gram: {
        color: appColors.content,
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT16,
        marginHorizontal: windowWidth(10),
        height: windowHeight(15),
        bottom: windowHeight(9),
        width: windowWidth(150),
    },
    priceView: {
        marginHorizontal: windowWidth(10),
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: windowHeight(4),
        height: windowHeight(15),
        bottom: windowHeight(7),
    },
    price: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
    },
    increase: {
        width: windowWidth(34),
        height: windowHeight(22),
        borderRadius: windowHeight(4),
        backgroundColor: appColors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wishList: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingHorizontal: windowHeight(8),
        top: windowHeight(3.5)
    },





    loaderContainer: {
        marginBottom: windowHeight(10),
        borderWidth: windowHeight(0.8),
        width: windowWidth(170),
        borderRadius: windowHeight(6),
        borderColor: appColors.border,
        marginHorizontal: windowWidth(10)
    },
    skeletonImage: {
        width: windowWidth(100),
        height: windowHeight(75),
        marginTop: windowHeight(20),
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: windowHeight(2.2),
        backgroundColor: appColors.loaderBackground,

    },
    skeletonText: {

        backgroundColor: appColors.loaderBackground,

        width: windowWidth(140),
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT17,
        top: windowHeight(12),
        height: windowHeight(12.5),

        marginHorizontal: windowWidth(10)
    },
    skeletonText1: {
        backgroundColor: appColors.loaderBackground,

        width: windowWidth(95),
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT17,
        top: windowHeight(18),
        height: windowHeight(12.5),

        marginHorizontal: windowWidth(10)
    },
    skeletonText2: {
        backgroundColor: appColors.loaderBackground,

        width: windowWidth(95),
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT17,
        marginTop: windowHeight(25),
        height: windowHeight(11.5),

        marginHorizontal: windowWidth(10)
    },
    skeletonText3: {
        width: windowWidth(23),
        height: windowHeight(17),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(25),
        bottom: windowHeight(3.5),
        marginHorizontal: windowWidth(10),
        borderRadius: windowHeight(2),
    },
})
export default styles;