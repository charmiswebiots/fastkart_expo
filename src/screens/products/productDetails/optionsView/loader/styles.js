import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../../theme/appConstant";

export default optionViewLoaderStyles = StyleSheet.create({
    optionView: {
        flexDirection: 'row',
        marginTop: windowHeight(20),
        justifyContent: 'space-between'
    },
    optionLoader: {
        width: windowWidth(200),
        justifyContent: 'space-between',
        borderRadius: windowHeight(4),
        height: windowHeight(50),
        alignItems: 'center',
        paddingHorizontal: windowWidth(10)
    },
    optionDataLoader: {
        width: windowWidth(80),
        height: windowHeight(14),
        borderRadius: windowWidth(2)
    },
    optionIconLoader: {
        width: windowWidth(24),
        height: windowHeight(20),
    },
})