import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";




const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:appColors.white,
    },
    input:{        
    },
    scrollView: {
        paddingTop: windowHeight(10)
    },
    priceView:{
        marginTop:windowHeight(8),
    },
})
export default styles;