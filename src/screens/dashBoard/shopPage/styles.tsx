import { StyleSheet } from "react-native";
import { windowHeight } from "../../../theme/appConstant";

const styles=StyleSheet.create({
    header: {
        marginHorizontal:windowHeight(8),
    },
    containerStyle: {
        paddingBottom: windowHeight(140)
    },
})
export default styles;