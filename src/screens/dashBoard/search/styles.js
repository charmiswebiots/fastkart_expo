import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../theme/appConstant";
import appColors from "../../../theme/appColors";


const styles = StyleSheet.create({
    mainView:{
        backgroundColor:appColors.white,
        flex:1,
    },
    input:{
        paddingHorizontal:windowHeight(41),
        width:windowWidth(437),
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginHorizontal: windowWidth(24),
        marginBottom: windowHeight(10),
        marginTop: windowHeight(20)
    },
    scrollView: {
        marginTop: windowHeight(10)
    },
    img: {
        height: windowHeight(50),
        width: windowWidth(50),
        resizeMode: 'contain'
    },
})
export default styles;