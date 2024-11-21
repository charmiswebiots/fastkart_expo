import { StyleSheet } from "react-native";
import {
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";

export default productViewStyles = StyleSheet.create({
    img: {
        alignSelf: 'center',
        width: '100%',
        marginTop: windowHeight(10)
    },
    product: {
        marginHorizontal: windowWidth(20)
    },
});