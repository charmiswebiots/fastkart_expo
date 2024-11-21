import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    btn: {
        width: '91%',
        backgroundColor: appColors.primary,
        alignSelf: 'center',
        height:windowHeight(20),
        bottom:windowHeight(6),
    },
})
export default styles