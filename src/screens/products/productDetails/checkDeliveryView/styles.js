import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default checkDeliveryViewStyles = StyleSheet.create({
    reviewNameView: {
        marginLeft: windowWidth(6)
    },
    reviewNameViewRight: {
        marginRight: windowWidth(6)
    },
    checkDelivery: {
        fontSize: fontSizes.FONT21,
        fontFamily: Commonfonts.mulishBold,
        marginTop: windowHeight(10)
    },
    content: {
        fontSize: fontSizes.FONT17,
        fontFamily: Commonfonts.mulish,
        color: Appcolor.content,
    },
    deliveryView: {
        marginTop: windowHeight(10),
        marginHorizontal: windowWidth(10)
    },
});