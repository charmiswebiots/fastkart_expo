import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles=StyleSheet.create({
    orderSuccess: {
        width: '100%',
        height: windowHeight(250),
        resizeMode: 'contain',
        marginTop: windowHeight(30)
    },
    btn: {
        width: '94%',
        backgroundColor: appColors.primary,
        alignSelf: 'center'
    },
})
export default styles;