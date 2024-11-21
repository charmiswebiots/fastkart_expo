import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    view:{
        bottom:windowHeight(16),
    },
    mainView: {
        width: '90%',
        // top:windowHeight(3),
        marginTop: windowHeight(15.5),
        paddingVertical: windowHeight(5),
        borderRadius: windowHeight(10),
        alignItems: 'center',
        flexDirection:'row',
        alignSelf:'center',
        backgroundColor:appColors.gray,
    },
    image: {
        width: windowWidth(80),
        height: windowHeight(80),
        marginLeft: windowWidth(20)
    },
    lineView: {
        width: windowWidth(1),
        height: windowHeight(50),
        backgroundColor: appColors.placeholder,
        marginLeft: windowWidth(20)
    },
    counterView: {
        marginLeft: windowWidth(20),
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
        flexDirection:'row',
    },
    discountPriceView: {
        alignItems: 'center',
        flexDirection:'row',

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
        marginHorizontal:windowHeight(8),
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(15),
        alignItems: 'center',
        flexDirection:'row',
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