import { StyleSheet } from "react-native";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    switchView: {
        alignItems: 'flex-end',
    },
    onStyle: {
        backgroundColor: appColors.primary
    },
    trackOnStyle: {
        backgroundColor: appColors.switch
    },
})
export default styles;