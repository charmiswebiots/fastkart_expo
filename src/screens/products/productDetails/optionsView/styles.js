import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";

export default optionViewStyles = StyleSheet.create({
    option: {
        width: '48%',
        justifyContent: 'space-between',
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
        marginTop: windowHeight(10),
        justifyContent: 'space-between'
    },
});