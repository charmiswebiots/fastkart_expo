import { StyleSheet } from "react-native";
import { windowHeight} from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: { flex: 0.9 },
    view:{ flex: 0.13 },
    orderSuccess: {
        width: '88%',
        height: windowHeight(250),
        resizeMode: 'contain',
        marginTop: windowHeight(30),
        alignSelf:'center'
    },
    btn: {
        width: '92%',
        backgroundColor: appColors.primary,
        alignSelf: 'center'
    },
})
export default styles;