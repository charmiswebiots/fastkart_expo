import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles = StyleSheet.create({
    view: {
        marginTop: windowHeight(0),
        bottom: windowHeight(10),
        paddingHorizontal: windowHeight(0)
    },
    btn: {
        width: '92%',
        backgroundColor: appColors.primary,
        position: 'absolute',
        bottom: windowHeight(10),
        alignSelf: 'center'
    },
})
export default styles;