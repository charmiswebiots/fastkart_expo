import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default detailsViewStyles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: Commonfonts.mulish,
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
});