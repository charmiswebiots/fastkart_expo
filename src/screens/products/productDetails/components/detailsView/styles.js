import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color:appColors.black,
        top:windowHeight(2),
    },
    detail: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        marginTop: windowHeight(14),
        color:appColors.black,
    },
    title: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginTop: windowHeight(4),
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
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    product: {
        marginTop: windowHeight(10),
        borderBottomWidth: 0.7,
        borderBottomColor: appColors.content,
        paddingBottom: windowHeight(20)
    },
})
export default styles;