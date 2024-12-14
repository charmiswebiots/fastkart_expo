import { StyleSheet } from "react-native";
import { windowHeight, fontSizes } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.black,
        top: windowHeight(2),
    },
    detail: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        marginTop: windowHeight(14),
        color: appColors.black,
    },
    title: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginTop: windowHeight(4),
    },
    style1: {
        borderBottomWidth: 0.7,
        marginTop: windowHeight(13),
        marginBottom: windowHeight(10),
        borderBottomColor: appColors.content,
    },
    style2: {
        borderBottomWidth: 0.7,
        marginTop: windowHeight(16),
        marginBottom: windowHeight(0),
        borderBottomColor: appColors.content,
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