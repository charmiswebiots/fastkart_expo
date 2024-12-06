import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles=StyleSheet.create({
    view:{
        backgroundColor:appColors.white,
    },
    container:{
        marginTop:windowHeight(14),
    },

})
export default styles;