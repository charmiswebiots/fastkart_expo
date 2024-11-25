import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        height: windowHeight(120),
        position: 'absolute',
        top: windowHeight(70),
        alignItems: 'center',
        width: '100%',
        alignSelf: 'center'
    },
    dropDownView: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: windowHeight(6),
        borderWidth: 1,
        borderColor: appColors.primary,
        padding: windowHeight(10),
        paddingHorizontal: windowWidth(20)
    },
    selectedTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.content
    },
    view: {
        width: '100%',
        backgroundColor: appColors.white,
        zIndex: 1,
        borderWidth: 0.5,
        opacity: 9
    },
    name: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.content,
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(2)
    },
})
export default styles;