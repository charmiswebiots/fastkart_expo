import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default categoryViewLoaderStyles = StyleSheet.create({
    mainView: {
        width: windowWidth(130),
        borderRadius: windowHeight(6),
        height: windowHeight(26),
        marginLeft: windowWidth(10)
    },
});