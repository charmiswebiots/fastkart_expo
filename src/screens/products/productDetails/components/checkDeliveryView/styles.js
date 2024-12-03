import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    reviewNameView: {
        marginHorizontal:windowWidth(8)
    },
 
    checkDelivery: {
        fontSize: fontSizes.FONT21,
        fontFamily:'mulishBold',
        marginTop: windowHeight(16),
        color:appColors.black,
        textAlign:'left'
    },
    content: {
        fontSize: fontSizes.FONT17,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        textAlign:'left'
    },
    deliveryView: {
        marginTop: windowHeight(10),
        marginHorizontal: windowWidth(10),
        flexDirection:'row'
    },
    input:{
        left:windowHeight(12),
        width:windowWidth(437),
    },
})
export default styles;