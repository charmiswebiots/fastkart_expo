import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    input: {
        paddingHorizontal: windowHeight(41),
        width: windowWidth(437),
    },
    scrollView: {
        paddingTop: windowHeight(10)
    },
    priceView: {
        marginTop: windowHeight(8),
    },
})
export default styles;