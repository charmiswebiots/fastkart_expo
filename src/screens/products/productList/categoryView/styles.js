import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Commonfonts from "../../../../theme/commonfonts";

export default categoryViewStyles = StyleSheet.create({
    list: {
        marginTop: windowHeight(20),
        paddingVertical: windowHeight(10)
    },
    name: {
        fontSize: fontSizes.FONT22,
        fontFamily: Commonfonts.mulish,
    },
    category: {
        paddingHorizontal: windowWidth(20),
        flexDirection: 'row'
    },
});