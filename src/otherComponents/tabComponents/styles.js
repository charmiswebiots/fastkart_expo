import { StyleSheet } from "react-native";
import { windowHeight, fontSizes } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: appColors.primary,
        height: windowHeight(69)
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    label: {
        color: appColors.white,
        fontSize: fontSizes.FONT15,
        fontFamily: 'mulishSemiBold',
        top: windowHeight(2.5),
        height: windowHeight(15)
    },
})
export default styles;