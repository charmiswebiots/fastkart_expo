import { StyleSheet } from "react-native";
import { windowHeight, windowWidth, fontSizes } from "../../theme/appConstant";
import appColors from "../../theme/appColors";


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        marginHorizontal: windowWidth(20),
        justifyContent: 'space-between',
        alignItems: 'center',
        height: windowHeight(50),
        marginTop:windowHeight(30),
    },
    arrowView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: fontSizes.FONT21,
        fontFamily: 'mulishSemiBold',
        marginLeft: windowWidth(16),
        color:appColors.black,
    },
    text1:{
        marginHorizontal:windowHeight(3),
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT19,
        color:appColors.content,
        paddingHorizontal:windowHeight(4),
        width:windowWidth(40)
    },
    image: {
        height: windowHeight(30),
        width: windowWidth(30)
    },
    headerImg: {
        marginLeft: windowWidth(14),
        marginHorizontal:windowHeight(0),
        resizeMode:"contain",
    },
    headerImgRight: {
        marginRight: windowWidth(14)
    },
    propText: {
        fontSize: fontSizes.FONT18,
        color: appColors.content,
        fontFamily: 'mulishSemiBold',
    },
})
export default styles;