import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";
import Appcolor from '../../../theme/colors';
import Commonfonts from "../../../theme/commonfonts";

export default productDetailsStyles = StyleSheet.create({
    scrollView: {
        marginBottom: windowHeight(50)
    },
    productImg: {
        width: windowWidth(240),
        height: windowHeight(240),
        alignSelf: 'center'
    },
    subView: {
        borderTopStartRadius: windowWidth(25),
        borderTopEndRadius: windowWidth(25),
        padding: windowWidth(20)
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
    },
    view: {
        flexDirection: 'row',
        marginTop: windowHeight(10)
    },
    originalPrice: {
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        marginLeft: windowWidth(6),
        textDecorationLine: 'line-through'
    },
    discount: {
        fontSize: fontSizes.FONT19,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary,
        marginLeft: windowWidth(10)
    },
    detail: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulishBold,
        marginTop: windowHeight(14)
    },
    title: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        marginTop: windowHeight(4)
    },
    manufacturer: {
        borderTopWidth: 0.7,
        borderBottomWidth: 0.7,
        borderTopColor: Appcolor.content,
        borderBottomColor: Appcolor.content,
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
        borderBottomColor: Appcolor.content,
        paddingBottom: windowHeight(10)
    },
    reviewView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: windowHeight(20)
    },
    seeAll: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.primary
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
        fontFamily: Commonfonts.mulish,
        fontSize: fontSizes.FONT20
    },
    reviewTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
        width: '100%'
    },
    line: {
        height: windowHeight(120),
    },
    counterView: {
        alignItems: 'center',
        position: 'absolute',
        bottom: windowHeight(60),
        backgroundColor: Appcolor.primary,
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
        fontFamily: Commonfonts.mulishBold,
        color: Appcolor.white,
        marginRight: windowWidth(6)
    },
    checkDelivery: {
        fontSize: fontSizes.FONT21,
        fontFamily: Commonfonts.mulishBold,
    },
    content: {
        fontSize: fontSizes.FONT17,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
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
        fontFamily: Commonfonts.mulish,
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
        fontFamily: Commonfonts.mulish,
        marginLeft: windowWidth(10)
    },
});