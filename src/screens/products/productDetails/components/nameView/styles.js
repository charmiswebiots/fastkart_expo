import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        textAlign:'left',
        color:appColors.black,
    },
    sideArrow: {
        flexDirection: 'row'
    },
    ratingsView: {
        marginVertical: windowHeight(10),
        flexDirection:'row'
    },
    star: {
        width: windowWidth(19),
        height: windowHeight(17),
        marginLeft: windowWidth(4)
    },
    ratings: {
        fontSize: fontSizes.FONT16,
        fontFamily: 'mulishSemiBold',
        marginLeft: windowWidth(10),
        color:appColors.black,
    },
    view: {
        flexDirection:'row'
    },
    originalPrice: {
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginHorizontal: windowWidth(10),
        textDecorationLine: 'line-through'
    },
    discount: {
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        color: appColors.primary,
    },
})
export default styles;