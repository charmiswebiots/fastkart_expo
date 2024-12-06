import { StyleSheet } from "react-native";
import { windowHeight,windowWidth,fontSizes } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    scrollView: {
        width: '100%',
        height: windowHeight(55),
        justifyContent: 'center',
    },
    time: {
        marginHorizontal:windowWidth(10),
        fontSize: fontSizes.FONT19,
        fontFamily: 'mulishSemiBold',
        marginTop: windowHeight(12),
    },
    primaryText:{
        color:appColors.primary,
    },
})
export default styles;