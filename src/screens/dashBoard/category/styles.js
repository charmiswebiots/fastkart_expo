import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles = StyleSheet.create({
    mainView:{
        backgroundColor:appColors.white,
    },
    input:{
        paddingHorizontal:windowHeight(41),
        width:windowWidth(437),
    },
    darkStyle: {
        height: windowHeight(24),
        width: windowWidth(160),
        resizeMode: 'stretch'
    },
    scrollView: {
        marginBottom: windowHeight(60)
    },
    dataView: {
        marginTop: windowHeight(20),
        justifyContent: 'space-between',
        flexDirection:"row",
    },
    vegiesRight: {
        marginHorizontal:windowHeight(10)
    },
})
export default styles;