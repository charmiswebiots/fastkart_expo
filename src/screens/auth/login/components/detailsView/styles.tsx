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
        paddingHorizontal:windowWidth(18)
    },
    container:{
        marginTop:windowHeight(3),
        height:windowHeight(60),
        justifyContent:"center",
    },
    container1:{
        height:windowHeight(60),
        justifyContent:"center",
    },
    forgotPassword: {
        textAlign: 'right',
        fontFamily: 'mulishSemiBold',
        color: appColors.content
    },
})
export default styles;