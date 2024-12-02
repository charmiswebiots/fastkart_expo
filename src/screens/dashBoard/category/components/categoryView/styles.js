import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    name: {
        fontSize: fontSizes.FONT16,
        fontFamily: 'mulishSemiBold',
        textAlign: 'center',
        width: windowWidth(140),
        color: appColors.black,
        marginTop: windowHeight(8),
    },
    line: {
        width: windowWidth(158),
        height: windowHeight(0.5),
        backgroundColor: appColors.content,
    },
    image: {
        width: windowWidth(50),
        height: windowHeight(50),
    },
    nameView: {
        height: windowHeight(110),
        width: windowWidth(160),
        alignItems: 'center',
        justifyContent: 'center',
    },
    separator: {
        height: windowHeight(10),
    },
    containerStyle: {
        width: '100%',
        marginTop: windowHeight(20),
        flexDirection: 'row'
    },
    imgView: {
        paddingHorizontal: windowHeight(3),
        width: windowWidth(90),
        height: windowHeight(80),
        alignItems: 'center',
        marginLeft: windowWidth(6),
        marginTop: windowHeight(10),
    },
    itemImg: {
        width: windowWidth(85),
        height: windowHeight(60),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(6)
    },
    img: {
        width: windowWidth(50),
        height: windowHeight(50),
    },
    nameTxt: {
        color: appColors.content,
        marginTop: windowHeight(4),
        fontSize: fontSizes.FONT15,
        fontFamily: 'mulishSemiBold',
        paddingHorizontal: windowHeight(-5)
    },
})
export default styles;