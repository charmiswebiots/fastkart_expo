import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles=StyleSheet.create({
    mainView: {
        paddingHorizontal: windowWidth(24)
    },
    profileView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: windowHeight(10),
        borderBottomWidth: 1.5,
        padding: windowHeight(10),
        borderBottomColor: appColors.line,
        marginBottom: windowHeight(4)
    },
    profileImg: {
        width: windowWidth(80),
        height: windowHeight(80)
    },
    dataView: {
        width: windowWidth(230),
    },
    name: {
        fontSize: fontSizes.FONT21,
        fontFamily: 'mulishBold',
    },
    email: {
        fontSize: fontSizes.FONT17,
        fontFamily: 'mulishSemiBold',
        color: appColors.content
    },
    darkView: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: windowHeight(10)
    },
    signOutView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth(180),
        justifyContent: 'center',
        marginBottom: windowHeight(20),
        height: windowHeight(50),
        borderRadius: windowHeight(10),
        marginTop: windowHeight(20)
    },
    signOut: {
        paddingHorizontal:windowHeight(5),
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color:appColors.black,
    },
})
export default styles;