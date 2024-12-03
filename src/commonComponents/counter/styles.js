import { StyleSheet } from "react-native";
import { windowHeight, windowWidth, fontSizes } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: windowWidth(30),
        borderRadius: windowHeight(6),
        borderColor: appColors.countBorder,
        justifyContent: 'space-between',
        flexDirection:'row',
        height:windowHeight(25),
        marginHorizontal:windowHeight(5),
    },
    decrease: {
        right:windowHeight(12)
    },
    increase: {
        left:windowHeight(11)
    },
    txt: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT20,
        color:appColors.primary,
    },
})
export default styles;