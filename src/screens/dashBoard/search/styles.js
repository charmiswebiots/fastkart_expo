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
    name: {
        fontSize: fontSizes.FONT20,
        paddingHorizontal: windowWidth(20),
        marginLeft: windowWidth(20),
        borderRadius: windowWidth(10),
        paddingVertical: windowHeight(10),
    },
    image: {
        height: windowHeight(70),
        width: windowWidth(140),
        alignItems: 'center',
        borderRadius: windowHeight(10),
        justifyContent: 'center',
        marginLeft: windowWidth(20)
    },
    img: {
        height: windowHeight(50),
        width: windowWidth(50),
        resizeMode: 'contain'
    },
})
export default styles;