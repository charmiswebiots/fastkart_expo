import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    dataView: {
        width: '100%',
        alignItems: 'center'
    },
    demoImg: {
        width: windowWidth(120),
        height:windowHeight(90),
        resizeMode: 'contain'
    },
    name: {
        fontSize: fontSizes.FONT23,
        fontFamily: 'mulishSemiBold',
        marginTop:windowHeight(10),
    },
    demoMail: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginTop:windowHeight(2),
    },
    editProfile: {
        backgroundColor: appColors.primary,
        width: windowHeight(25),
        height: windowHeight(25),
        borderRadius: windowHeight(15),
        position: 'absolute',
        bottom: windowHeight(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:windowHeight(62),
    }
})
export default styles;