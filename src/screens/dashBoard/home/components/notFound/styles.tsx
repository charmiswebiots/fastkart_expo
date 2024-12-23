import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        marginTop: windowHeight(10),
        marginBottom: windowHeight(100)
    },
    didntFind: {
        fontSize: fontSizes.FONT30,
        fontFamily: 'mulishSemiBold',
        color: appColors.placeholder,
        paddingHorizontal: windowWidth(20)
    },
    textView: {
        height: windowHeight(30),
        width: windowWidth(188),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(4),
        marginTop: windowHeight(10),
        backgroundColor: appColors.primary,
        marginHorizontal: windowWidth(20)
    },
    text: {
        fontFamily: 'mulishBold',
        fontSize: fontSizes.FONT17,
        color: appColors.white
    },
})
export default styles;