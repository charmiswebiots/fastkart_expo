import { StyleSheet } from "react-native";
import { windowHeight,windowWidth } from "../../../theme/appConstant";

const styles=StyleSheet.create({
    header: {
        // height: windowHeight(20),
        // width: windowWidth(34.5),
        // resizeMode: 'contain',
        // backgroundColor:'red'
        marginHorizontal:windowHeight(8),
    },
    containerStyle: {
        paddingBottom: windowHeight(140)
    },
})
export default styles;