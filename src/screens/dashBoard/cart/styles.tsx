import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: appColors.white, 
        height: '100%'
    },
    view: {
        marginTop: windowHeight(8)
    },
})
export default styles;