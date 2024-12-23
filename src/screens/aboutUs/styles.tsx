import { StyleSheet } from "react-native";
import { windowHeight } from "../../theme/appConstant";

const styles=StyleSheet.create({
    mainView: {
        height: '100%',
        width: '100%',
    },
    img: {
        width: '91%',
        alignSelf:"center",
        height:windowHeight(165),
    },
})
export default styles;