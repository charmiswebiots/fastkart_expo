import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    inputView: {
        alignSelf: 'center',
        borderWidth: 1,
        height: windowHeight(50),
        marginTop: windowHeight(20),
        borderRadius: windowWidth(6)
    },
    txt: {
        fontFamily: 'mulishSemiBold',
        color:appColors.white,
        fontSize: fontSizes.FONT20,
        paddingHorizontal: windowWidth(20)
    },
    list: {
        alignSelf: 'center',
        maxHeight: windowHeight(140),
        position: 'absolute',
        bottom: windowHeight(50),
        elevation: 2
    },
    listTxt: {
        fontSize: fontSizes.FONT20,
        color:appColors.white,
        fontFamily: 'mulishSemiBold',
        paddingHorizontal: windowWidth(20)
    },
    lstView: {
        justifyContent: 'center',
        height: windowHeight(48),
    },
    contentStyle: {
        paddingVertical: windowHeight(20),
    }
})
export default styles;