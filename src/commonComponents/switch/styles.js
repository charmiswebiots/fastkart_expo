import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";
import { windowHeight, windowWidth } from "../../theme/appConstant";

const styles = StyleSheet.create({
    switchView: {
        alignItems: 'flex-end',
    },
    switchContainer: {
        width: 50,
        height: 25,
        borderRadius: 15,
        justifyContent: "center",
        padding: windowHeight(4),
    },
    switchOn: {
        backgroundColor: appColors.switch,
    },
    switchOff: {
        backgroundColor: appColors.switch,
    },
    circle: {
        width: windowWidth(23),
        height: windowWidth(23),
        borderRadius: windowHeight(8),
        backgroundColor: appColors.white,

    },
    circleOn: {
        backgroundColor: appColors.primary,
        alignSelf: "flex-end",
    },
    circleOff: {
        backgroundColor: appColors.white,
        alignSelf: "flex-start",
    },
})
export default styles;