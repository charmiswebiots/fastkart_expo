import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";


const styles = StyleSheet.create({
    mainView: {
        marginTop: windowHeight(30),
        backgroundColor:appColors.drawer,
        padding:windowHeight(6),
        bottom:windowHeight(7),
        paddingVertical:windowHeight(8),
    },
    view:{
        bottom:windowHeight(15),
    },
})
export default styles;