import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    thankyou: {
        fontSize: fontSizes.FONT26,
        fontFamily: 'quickSandBold',
        alignSelf: 'center',
        marginTop: windowHeight(10),
        color:appColors.black,
    },
    orderSuccessfull: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        alignSelf: 'center',
        color: appColors.content,
        textAlign: 'center',
        width: '90%',
        marginTop: windowHeight(6),
        borderBottomWidth: 0.5,
        paddingBottom: windowHeight(10),
        borderBottomColor: appColors.placeholder
    },
})
export default styles;