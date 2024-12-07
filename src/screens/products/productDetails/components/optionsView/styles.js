import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    option: {
        width: '48%',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(19),
        alignItems: 'center',
        height: windowHeight(40),
        borderRadius: windowHeight(7),
        backgroundColor:appColors.gray,
    },
    optionTxt: {
        fontSize: fontSizes.FONT18,
        fontFamily:'mulishSemiBold',
        color:appColors.black,
    },
    optionMainView: {
        marginTop: windowHeight(10),
        justifyContent: 'space-between',
    },
})
export default styles;