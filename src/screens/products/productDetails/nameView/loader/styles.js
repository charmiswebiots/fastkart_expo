import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default nameViewLoaderStyles = StyleSheet.create({
    titleLoader: {
        width: windowWidth(260),
        height: windowHeight(20),
        borderRadius: windowWidth(2)
    },
    ratingsLoader: {
        width: windowWidth(100),
        height: windowHeight(20),
        borderRadius: windowWidth(2),
        marginTop: windowHeight(10)
    },
    priceView: {
        marginTop: windowHeight(6)
    },
    priceLoader: {
        width: windowWidth(80),
        height: windowHeight(20),
        borderRadius: windowWidth(2)
    },
    view: {
        marginLeft: windowWidth(10)
    },
    viewRight: {
        marginRight: windowWidth(10)
    },
})