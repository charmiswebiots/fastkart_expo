import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    addCard: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT24,
        color: appColors.black,
    },
    inputView: {
        width: '100%',
        justifyContent: 'space-between'
    },
    input: {
        paddingHorizontal: windowHeight(15),
        width: windowWidth(440),
    },
    input1:{
        paddingHorizontal: windowHeight(15),
        width: windowWidth(210),
    },
})
export default styles;