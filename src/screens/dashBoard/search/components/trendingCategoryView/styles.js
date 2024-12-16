import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";


const styles = StyleSheet.create({
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginHorizontal: windowWidth(24),
        marginBottom: windowHeight(10),
        marginTop: windowHeight(22)
    },
    scrollView: {
        marginTop: windowHeight(2),
        marginHorizontal: windowHeight(10),

    },
    image: {
        height: windowHeight(51),
        width: windowWidth(81),
        alignItems: 'center',
        borderRadius: windowHeight(10),
        justifyContent: 'center',
        marginHorizontal: windowHeight(9.5),
    },
    img: {
        height: windowHeight(35),
        width: windowWidth(55),
        resizeMode: 'contain'
    },
    image1: {
        height: windowHeight(51),
        width: windowWidth(81),
        alignItems: 'center',
        borderRadius: windowHeight(10),
        justifyContent: 'center',
        marginHorizontal: windowHeight(9.5),
        backgroundColor: appColors.loaderBackground,
    }
})
export default styles;