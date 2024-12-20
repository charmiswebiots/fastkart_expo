import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    reviewNameView: {
        marginHorizontal: windowWidth(8)
    },
    inputView: { marginTop: windowHeight(16) },
    checkDelivery: {
        fontSize: fontSizes.FONT21,
        fontFamily: 'mulishBold',
        marginTop: windowHeight(15),
        color: appColors.black,
    },
    content: {
        fontSize: fontSizes.FONT17,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginTop: windowHeight(1)
    },
    deliveryView: {
        marginTop: windowHeight(10),
        marginHorizontal: windowWidth(10),
    },
    input: {
        paddingHorizontal: windowHeight(12),
        width: windowWidth(440),
    },
})
export default styles;