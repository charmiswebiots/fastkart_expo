import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    selectView: {
        backgroundColor: appColors.primary,
        paddingHorizontal: windowHeight(6),
        position: 'absolute',
        top: 0,
        paddingVertical: windowHeight(3),
        right: 0
    },
    selectLeft: {
        borderTopEndRadius: windowHeight(5),
        borderBottomStartRadius: windowHeight(5),
    },
    selectRight: {
        borderTopStartRadius: windowHeight(5),
        borderBottomEndRadius: windowHeight(5),
    },
})
export default styles;