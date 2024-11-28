import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";


export default productDetailsStyles = StyleSheet.create({
    scrollView: {
        marginBottom: windowHeight(50)
    },
    productImg: {
        width: windowWidth(260),
        height: windowHeight(240),
        alignSelf: 'center'
    },
    subView: {
        borderTopStartRadius: windowWidth(25),
        borderTopEndRadius: windowWidth(25),
        padding: windowWidth(20)
    },
    color:{
        backgroundColor:appColors.white,
        borderColor:appColors.white,
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
    },
    view: {
        flexDirection: 'row',
        marginTop: windowHeight(10)
    },
    originalPrice: {
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginLeft: windowWidth(6),
        textDecorationLine: 'line-through'
    },
    discount: {
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        color: appColors.primary,
        marginLeft: windowWidth(10)
    },
    detail: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        marginTop: windowHeight(14)
    },
    title: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginTop: windowHeight(4)
    },
    manufacturer: {
        borderTopWidth: 0.7,
        borderBottomWidth: 0.7,
        borderTopColor: appColors.content,
        borderBottomColor: appColors.content,
        marginTop: windowHeight(14),
        paddingVertical: windowHeight(10)
    },
    optionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    product: {
        marginTop: windowHeight(14),
        borderBottomWidth: 0.7,
        borderBottomColor: appColors.content,
        paddingBottom: windowHeight(10)
    },
    reviewView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: windowHeight(20)
    },
    seeAll: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.primary
    },
    list: {
        marginBottom: windowHeight(20)
    },
    review: {
        marginTop: windowHeight(20),
        padding: windowWidth(20),
        borderRadius: windowHeight(10)
    },
    reviewDetail: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    demoProfile: {
        width: windowWidth(70),
        height: windowHeight(70),
        resizeMode: 'contain'
    },
    reviewNameView: {
        marginLeft: windowWidth(14)
    },
    reviewName: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT20
    },
    reviewTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        width: '100%'
    },
    line: {
        height: windowHeight(200),
    },
    counterView: {
        alignItems: 'center',
        position: 'absolute',
        bottom: windowHeight(60),
        backgroundColor: appColors.primary,
        width: '94%',
        height: windowHeight(56),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: windowWidth(10),
        alignSelf: 'center',
        borderRadius: windowHeight(4),
        paddingLeft: windowWidth(20)
    },
    sideArrow: {
        flexDirection: 'row'
    },
    addToCart: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        color: appColors.white,
        marginRight: windowWidth(6)
    },
    checkDelivery: {
        fontSize: fontSizes.FONT21,
        fontFamily: 'mulishBold',
    },
    content: {
        fontSize: fontSizes.FONT17,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
    },
    contentView: {
        flexDirection: 'row',
        marginTop: windowHeight(10)
    },
    deliveryView: {
        flexDirection: 'row',
        marginTop: windowHeight(20)
    },
    option: {
        width: '48%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: windowWidth(14),
        alignItems: 'center',
        height: windowHeight(40),
        borderRadius: windowHeight(10)
    },
    optionTxt: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
    },
    optionMainView: {
        flexDirection: 'row',
        marginTop: windowHeight(10),
        justifyContent: 'space-between'
    },
    ratingsView: {
        flexDirection: 'row',
        marginVertical: windowHeight(10)
    },
    star: {
        width: windowWidth(19),
        height: windowHeight(17),
        marginLeft: windowWidth(4)
    },
    ratings: {
        fontSize: fontSizes.FONT16,
        fontFamily: 'mulishSemiBold',
        marginLeft: windowWidth(10)
    },
});