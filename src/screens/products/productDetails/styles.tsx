import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../theme/appConstant";


export default productDetailsStyles = StyleSheet.create({
    scrollView: {
        marginBottom: windowHeight(50)
    },
    productImg: {
        width: windowWidth(260),
        height: windowHeight(240),
        alignSelf: 'center'
    },
    subView: {
        borderTopStartRadius: windowWidth(25),
        borderTopEndRadius: windowWidth(25),
        padding: windowWidth(20)
    },
    line: {
        height: windowHeight(100),
    },


});