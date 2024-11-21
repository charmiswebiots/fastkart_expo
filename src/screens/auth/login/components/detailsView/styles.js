import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";


const styles = StyleSheet.create({
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
    container:{
        marginTop:windowHeight(3),
        height:windowHeight(60),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:"center",
        right:windowHeight(10),

    },
    container1:{
        bottom:windowHeight(0.5),
        height:windowHeight(60),
        alignSelf:'center',
        alignItems:'center',
        justifyContent:"center",
        right:windowHeight(10),

    },
    forgotPassword: {
        textAlign: 'right',
        fontFamily: 'mulishSemiBold',
        color: appColors.content
    },
})
export default styles;