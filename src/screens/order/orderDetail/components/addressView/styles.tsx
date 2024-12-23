import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    dataView: {
        marginTop: windowHeight(10)
    },
    addTxt: {
        marginHorizontal: windowWidth(20),
        fontFamily: 'mulishSemiBold',
        color: appColors.primary,
        fontSize: fontSizes.FONT24,
    },
    name: {
        marginHorizontal: windowWidth(20),
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT21,
        marginTop: windowHeight(10),
        textAlign:'left',
        color:appColors.black,
    },
    locationTxt: {
        marginHorizontal: windowWidth(20),
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        fontSize: fontSizes.FONT21,
    },
})
export default styles;