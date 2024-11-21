import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles=StyleSheet.create({
    container:{
        marginTop:windowHeight(23),
        gap:20,
        right:windowWidth(15),
    },
    input:{
        width:windowWidth(440),
        left:windowWidth(15),
    }
})
export default styles;