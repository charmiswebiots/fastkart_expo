import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";


const styles=StyleSheet.create({
    online: {
        marginTop: windowHeight(20),
        fontFamily: 'nunitoSans',
        fontSize: fontSizes.FONT20,
        color:appColors.black,
    },
    input:{
        width:windowWidth(440),
        paddingHorizontal:windowWidth(18)
    },
    container1:{
        marginTop:windowHeight(11),
        height:windowHeight(60),
    },
    container:{
        height:windowHeight(60),
    },
  
})
export default styles;