import { windowHeight, windowWidth } from "../../../theme/appConstant";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: windowWidth(220),
        height: windowHeight(60),
        resizeMode: 'contain'
    }
})
export default styles;