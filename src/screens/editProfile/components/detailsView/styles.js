import { StyleSheet } from "react-native";
import { windowHeight,windowWidth } from "../../../../theme/appConstant";

const styles=StyleSheet.create({
    container:{
        marginTop:windowHeight(23),
        gap:20,
    },
    input:{
        width:windowWidth(440),
        paddingHorizontal:windowWidth(18)
    }
})
export default styles;