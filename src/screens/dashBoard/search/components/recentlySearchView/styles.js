import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginHorizontal: windowWidth(24),
        marginBottom: windowHeight(10),
        marginTop: windowHeight(25)
    },
    scrollView: {
        marginTop: windowHeight(1.5),
        marginHorizontal:windowWidth(14),

    },
    name: {
        backgroundColor:appColors.drawer,
        fontSize: fontSizes.FONT20,
        paddingHorizontal: windowWidth(20),
        // marginLeft: windowWidth(20),
        marginHorizontal:windowWidth(8.5),
        borderRadius: windowWidth(10),
        paddingVertical: windowHeight(7),
    },
})
export default styles;