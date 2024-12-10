import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    checkOut: {
        width: '100%',
        borderRadius: windowWidth(6),
        padding: windowWidth(14),
        marginTop: windowHeight(20)
    },
    checkOutTxt: {
        fontSize: fontSizes.FONT20,
        color: appColors.content,
        fontFamily: 'mulishSemiBold'
    },
    menu:{
        marginHorizontal:windowWidth(18)
    }
})
export default styles;