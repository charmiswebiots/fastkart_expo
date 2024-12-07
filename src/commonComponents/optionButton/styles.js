import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'space-between',
        width: '100%',
    },
    closeBtn: {
        width: '48%',
        backgroundColor: appColors.white,
        borderWidth: 1,
        borderColor: appColors.primary
    },
    applyBtn: {
        width: '48%',
        backgroundColor: appColors.primary,
    }
})
export default styles;