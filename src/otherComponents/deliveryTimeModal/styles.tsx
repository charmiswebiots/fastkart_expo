import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    column: {
        justifyContent: 'space-between'
    },
    view: {
        width: '48%',
        height: windowHeight(44),
        marginTop: windowHeight(14),
        justifyContent: 'center',
        paddingHorizontal: windowWidth(10),
        borderRadius: windowHeight(6),
        borderWidth: 1,
    },
    text: {
        fontSize: fontSizes.FONT18,
        color: appColors.black,
        fontFamily: 'mulishSemiBold',
        textAlign: 'left'
    },
})
export default styles;