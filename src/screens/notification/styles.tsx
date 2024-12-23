import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles=StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
        backgroundColor:appColors.white,
    },
    modal: {
        padding: windowWidth(20),
        borderTopStartRadius: windowWidth(20),
        borderTopEndRadius: windowWidth(20),
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1
    }
})
export default styles;