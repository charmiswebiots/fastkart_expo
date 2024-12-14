import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    switchView: {
        alignItems: "flex-end",
    },
    switchContainer: {
        width: windowHeight(40),
        height: windowHeight(20.5),
        borderRadius: windowHeight(10),
        justifyContent: "center",
        padding: windowHeight(4),
    },
    switchOn: {
        backgroundColor: appColors.switch,
    },
    switchOff: {
        backgroundColor: appColors.switch,
    },
    circleOn: {
        width: windowWidth(23),
        height: windowWidth(23),
        borderRadius: windowHeight(8),
        backgroundColor: appColors.primary,

        alignItems: "center",
        justifyContent: 'center',
        alignSelf: "flex-end",
    },
    circleOff: {
        width: windowWidth(23),
        height: windowWidth(22),
        borderRadius: windowHeight(8),
        backgroundColor: appColors.white,
        elevation: 2,
        alignSelf: "flex-start",
    },
})
export default styles;