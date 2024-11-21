import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default detailViewLoaderStyles = StyleSheet.create({
    detailView: {
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(10),
        marginTop: windowHeight(20)
    },
    detailLoader: {
        width: windowWidth(140),
        height: windowHeight(24),
        borderRadius: windowWidth(2)
    },
    detailTxtLoader: {
        width: windowWidth(400),
        height: windowHeight(16),
        borderRadius: windowWidth(2),
        marginTop: windowHeight(10)
    },
    descLoader: {
        width: windowWidth(260),
        height: windowHeight(16),
        borderRadius: windowWidth(2),
        marginTop: windowHeight(10)
    },
    optionMainView: {
        justifyContent: 'space-between',
    },
    optionTitleLoader: {
        width: windowWidth(180),
        height: windowHeight(24),
        borderRadius: windowWidth(2)
    },
    iconLoader: {
        width: windowWidth(24),
        height: windowHeight(20),
    },
    optionsLoader: {
        paddingBottom: windowHeight(10),
        justifyContent: 'space-between',
        marginTop: windowHeight(10)
    },
    detailsLoader: {
        width: windowWidth(180),
        height: windowHeight(24),
        borderRadius: windowWidth(2)
    },
    featureLoader: {
        width: windowWidth(60),
        height: windowHeight(16),
    },
    featureOptionLoader: {
        width: windowWidth(180),
        height: windowHeight(16),
        borderRadius: windowWidth(2)
    },
})