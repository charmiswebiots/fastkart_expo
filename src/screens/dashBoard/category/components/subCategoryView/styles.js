import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    separator: {
        height: windowHeight(10)
    },
    containerStyle: {
        width: '100%',
        marginTop: windowHeight(20)
    },
    imgView: {
        width: windowWidth(90),
        height: windowHeight(80),
        alignItems: 'center',
        marginLeft: windowWidth(6),
        marginTop: windowHeight(10)
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
        height: windowHeight(50)
    },
    nameTxt: {
        color: appColors.content,
        marginTop: windowHeight(4),
        fontSize: fontSizes.FONT15,
        fontFamily: 'mulishSemiBold'
    },
})
export default styles;