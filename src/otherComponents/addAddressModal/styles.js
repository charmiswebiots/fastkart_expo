import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    input:{
        left:windowHeight(10),
    },
    address: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        height:windowHeight(18),
        bottom:windowHeight(15),
    },
    container: {
        height: windowHeight(385),
        marginTop: windowHeight(18),
    },
    picker: {
        borderRadius: windowHeight(6),
    },
    dropdown: {
        borderRadius: windowHeight(0),
        borderWidth: 0.5
    },
    placeholder: {
        fontSize: fontSizes.FONT19,
        color: appColors.content,
        fontFamily: 'mulishSemiBold',
        paddingLeft: windowWidth(10)
    },
    listItem: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT18,
        padding: 3,
        marginLeft: windowWidth(10),
    },
    txtStyle: {
        fontSize: fontSizes.FONT19,
        paddingLeft: windowWidth(10)
    },
})
export default styles;