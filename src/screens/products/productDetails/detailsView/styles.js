import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
} from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";


export default detailsViewStyles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
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
});