import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { windowHeight } from "../../../theme/appConstant";

const styles = StyleSheet.create({
    scrollView:{
        bottom:windowHeight(15),
    },
    mainView:{
        backgroundColor:appColors.white,
        flex: 1
    },
})
export default styles;