import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";


const styles=StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
    },
    subView: {
        width: '100%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notFound: {
        fontSize: fontSizes.FONT24,
        textAlign: 'center',
        fontFamily: 'mulishSemiBold',
        width: '90%',
        alignSelf: 'center',
        marginTop: windowHeight(20)
    },
    line: {
        height: windowHeight(2),
        width: windowWidth(70),
        backgroundColor: appColors.primary,
        marginTop: windowHeight(10),
        marginBottom: windowHeight(16)
    },
    notExist: {
        fontSize: fontSizes.FONT20,
        color: appColors.content,
        lineHeight:fontSizes.FONT20*1.5,
        textAlign: 'center',
        fontFamily: 'mulishSemiBold',
        width: '90%',
        alignSelf: 'center'
    },
    btn: {
        width: '49%',
        backgroundColor: appColors.primary,
    },
})
export default styles;