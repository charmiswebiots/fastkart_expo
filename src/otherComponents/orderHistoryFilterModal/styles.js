import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        borderTopStartRadius: windowWidth(20), borderTopEndRadius: windowWidth(20), position: 'absolute', bottom: 0, width: '100%'
    },
    listView: {
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(20)
    },
    dayTxt: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT20,
        color: appColors.content,
        marginBottom: windowHeight(16),
        marginTop: windowHeight(10)
    },
    columnWrapperStyle: {
        justifyContent: 'space-between',
        flexDirection: "row",
    },
    separator: {
        height: windowHeight(10)
    },
    dataView: {
        width: '48%',
        height: windowHeight(46),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(4),
        borderWidth: 0.5,
        borderColor: appColors.primary,
    },
    txt: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        marginBottom: windowHeight(20)
    },
})
export default styles;