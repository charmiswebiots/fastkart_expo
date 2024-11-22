import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    dataView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: windowHeight(10),
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(10),
        flexDirection:"row",
        borderBottomColor: appColors.placeholder
    },
    profileView: {
        alignItems: 'center',
        flexDirection:"row",

    },
    profile: {
        height: windowHeight(70),
        width: windowWidth(70),
        resizeMode: 'contain'
    },
    nameView: {
        paddingHorizontal: windowWidth(10)
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold'
    },
    courier: {
        fontSize: fontSizes.FONT20,
        color: appColors.content,
        fontFamily: 'mulishSemiBold'
    },
    option: {
        width: windowWidth(47),
        height: windowHeight(32),
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:appColors.primary,
        borderRadius: windowHeight(4),
        // textAlign:'left',
    },
    chat: {
        marginLeft: windowWidth(16),
        borderWidth: 1,
        borderColor: appColors.primary,
    },
    chatLeft: {
        // marginLeft: windowWidth(16),
    },
    chatRight: {
        // marginRight: windowWidth(16),
    },
})
export default styles;