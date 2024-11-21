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
        left:windowWidth(15),

    },
    container1:{
        marginTop:windowHeight(11),
        height:windowHeight(60),
        right:windowHeight(10),
    },
    container:{
        height:windowHeight(60),
        right:windowHeight(10),

    },
    forgotPassword: {
        textAlign: 'right',
        marginTop: windowHeight(6),
        fontFamily: 'mulishSemiBold',
        color: appColors.content
    },
})
export default styles;