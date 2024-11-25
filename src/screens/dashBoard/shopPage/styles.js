import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles=StyleSheet.create({
    header: {
        height: windowHeight(24),
        width: windowWidth(50),
        resizeMode: 'stretch'
    },
    containerStyle: {
        paddingBottom: windowHeight(140)
    },
})
export default styles;