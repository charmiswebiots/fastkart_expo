import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

export default checkDeliveryViewStyles = StyleSheet.create({
    reviewNameView: {
        marginLeft: windowWidth(6)
    },
    reviewNameViewRight: {
        marginRight: windowWidth(6)
    },
    checkDelivery: {
        fontSize: fontSizes.FONT21,
        fontFamily: 'mulishBold',
        marginTop: windowHeight(10)
    },
    content: {
        fontSize: fontSizes.FONT17,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
    },
    deliveryView: {
        marginTop: windowHeight(10),
        marginHorizontal: windowWidth(10)
    },
});