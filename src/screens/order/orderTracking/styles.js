import { StyleSheet } from "react-native";
import { windowWidth,windowHeight } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles=StyleSheet.create({
    subView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: windowHeight(260),
    },
    view: {
        borderTopStartRadius: windowHeight(24),
        borderTopEndRadius: windowHeight(24),
        width: '100%',
        height: windowHeight(280),
        paddingHorizontal: windowWidth(20),
        paddingTop: windowHeight(10),
        backgroundColor:appColors.white,
    },
    btn: {
        width: '100%',
        backgroundColor: appColors.primary,
        marginBottom: windowHeight(40)
    },
})
export default styles;