import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";


const styles = StyleSheet.create({
    createAcc: {
        textAlign: 'center',
        marginTop: windowHeight(7),
        fontFamily: 'mulishBold',
        fontSize: fontSizes.FONT18,
        color: appColors.content
    },
    signInView: {
        marginTop: windowHeight(28),
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100%',
    },
    signIn: {
        textAlign: 'center',
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT18,
        color: appColors.primary,
        backgroundColor:appColors.white,
        position: 'absolute',
        paddingHorizontal: windowWidth(20)
    },
    btnContainer:{
        bottom:windowHeight(11.5),
    },
    view: {
        paddingVertical: windowHeight(50),
    },
    guest: {
        textAlign: 'center',
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT18,
        paddingHorizontal: windowWidth(20),
        textDecorationLine: 'underline',
        position: 'absolute',
        color:appColors.black,
        width: '100%',
        paddingVertical: windowHeight(20)
    
    },

})
export default styles;