import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles=StyleSheet.create({
    btn: {
        width: '90%',
        backgroundColor: appColors.primary,
        marginBottom: windowHeight(20),
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
})
export default styles;