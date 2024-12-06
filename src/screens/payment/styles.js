import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    btn: {
        width: '90.5%',
        backgroundColor: appColors.primary,
        position: 'absolute',
        bottom: windowHeight(15),
        alignSelf: 'center'
    },
})
export default styles;