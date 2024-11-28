import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    profileView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: appColors.line,
    },
    profileImg: {
        width: windowWidth(80),
        height: windowHeight(80)
    },
    dataView: {
        marginHorizontal:windowHeight(10),
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
})
export default styles;