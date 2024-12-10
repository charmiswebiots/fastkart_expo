import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";

const styles = StyleSheet.create({
    addCard: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT24,
    },
    mainView: {
        paddingVertical: windowHeight(1), gap: 20, marginTop: windowHeight(15)
    },
    inputView: {
        width: '100%',
        justifyContent: 'space-between'
    },
    input: {
        paddingHorizontal: windowHeight(15),
        width: windowWidth(440),
    },
    input1: {
        paddingHorizontal: windowHeight(15),
        width: windowWidth(210),
    },
})
export default styles;