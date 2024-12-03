import { StyleSheet } from "react-native";
import { windowHeight, fontSizes,windowWidth} from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    addTxt: {
        marginHorizontal: windowWidth(20),
        fontFamily: 'mulishSemiBold',
        color: appColors.primary,
        fontSize: fontSizes.FONT24,
        textAlign:'left'
    },
    paymentView: {
        marginTop: windowHeight(20),
        marginBottom: windowHeight(80)
    },
    number: {
        flexDirection: 'row',
        marginHorizontal:windowWidth(20),
        alignItems: 'center'
    },
    masterCardImg: {
        height: windowHeight(60),
        width: windowWidth(60),
        resizeMode: 'contain'
    },
    cardNumber: {
        marginHorizontal:windowWidth(10),
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT21,
        color:appColors.black,
    },
})
export default styles;