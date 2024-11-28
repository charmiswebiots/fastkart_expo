import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    column: {
        justifyContent: 'space-between'
    },
    selectView: {
        backgroundColor: appColors.primary,
        paddingHorizontal: windowHeight(6),
        position: 'absolute',
        right: 0,
        top: 0,
        borderTopEndRadius: windowHeight(5),
        borderBottomStartRadius: windowHeight(5),
        paddingVertical: windowHeight(3)
    },
    view: {
        width: '48%',
        height: windowHeight(44),
        marginTop: windowHeight(14),
        justifyContent: 'center',
        paddingHorizontal: windowWidth(10),
        borderRadius: windowHeight(6),
        borderWidth: 1,
    },
    txt: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color:appColors.black,
        textAlign:'left'
    }
})
export default styles;