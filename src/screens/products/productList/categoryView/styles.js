import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";

export default categoryViewStyles = StyleSheet.create({
    list: {
        marginTop: windowHeight(20),
        paddingVertical: windowHeight(10)
    },
    name: {
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishSemiBold',
    },
    category: {
        paddingHorizontal: windowWidth(20),
        flexDirection: 'row'
    },
});