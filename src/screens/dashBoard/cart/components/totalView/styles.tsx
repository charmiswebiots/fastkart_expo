import { StyleSheet } from "react-native";
import { windowHeight,windowWidth,fontSizes } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    total: {
        marginBottom: windowHeight(15),
        marginTop: windowHeight(20)
    },
    btn: {
        width: '91%',
        alignSelf:"center",
        backgroundColor: appColors.primary
    },
})
export default styles;