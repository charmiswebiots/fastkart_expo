import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles=StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
        backgroundColor:appColors.white,
    },
    img: {
        width: '91%',
        alignSelf:"center",
        height:windowHeight(165),
    },
})
export default styles;