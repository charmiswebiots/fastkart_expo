import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";

export default productListStyles = StyleSheet.create({
    header: {
        height: windowHeight(24),
        width: windowWidth(50),
        resizeMode: 'stretch'
    },
    containerStyle: {
        paddingBottom: windowHeight(140)
    },
});