import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        padding: windowWidth(11),
        backgroundColor:appColors.drawer,
        marginTop: windowHeight(15),
    },
    dataView: {
        width: windowWidth(180),
        height: windowHeight(100),
        alignItems: 'center',
        marginHorizontal:windowHeight(3),
        right:windowHeight(3),
        bottom:windowHeight(7),

    },
    image: {
        width: windowWidth(80),
        height: windowHeight(50),
        marginTop: windowHeight(2),
        gap:10,
    },
    discount: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.title
    },
    upto: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color: appColors.content
    },
})
export default styles;