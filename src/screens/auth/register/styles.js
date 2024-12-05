import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { windowHeight,fontSizes,windowWidth } from "../../../theme/appConstant";


const styles=StyleSheet.create({
    mainView: {
        backgroundColor: appColors.primary,
        flex: 1
    },
    subView: {
        top: windowHeight(70),
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        height: '100%',
        paddingHorizontal: windowWidth(20),
        backgroundColor:appColors.white,
    },
    loginView: {
        width: '100%',
        position: 'absolute',
    },
    container:{
        marginTop:windowHeight(3),
    },
    btn: {
        width: '100%',
        bottom:windowHeight(20),
        backgroundColor: appColors.primary,
    },
    continue:{
        bottom:windowHeight(18),

    },
    guest: {
        textAlign: 'center',
        fontFamily:'mulishSemiBold',
        fontSize: fontSizes.FONT18,
        paddingHorizontal: windowWidth(20),
        textDecorationLine: 'underline',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor:appColors.white,
        paddingVertical: windowHeight(10)
    },

})
export default styles;