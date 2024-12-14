import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    list: {
        paddingBottom: windowHeight(20),
        marginTop: windowHeight(0)
    },
    dataView: {
        marginTop: windowHeight(20),
        paddingHorizontal: windowWidth(17)
    },
    day: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT20,
        color: appColors.content,
    },
    value: {
        marginTop: windowHeight(14),
        alignItems: 'center',
    },
    icon: {
        height: windowHeight(42),
        width: windowWidth(65),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(6.5),
        marginHorizontal:windowHeight(2.5),
    },
    titleView: {
        justifyContent: 'space-between',
        width: windowWidth(370),
        flexDirection:'row',
    },
    title: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT18,
    },
    subTxt: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT17,
        color: appColors.content,
    },
    tag: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT16,
        color: appColors.primary,
        paddingHorizontal: windowWidth(13),
        height: windowHeight(24),
        textAlignVertical: 'center',
        borderRadius: windowWidth(6),
        backgroundColor:appColors.drawer,
    },
    offerLeft: {
        marginHorizontal: windowWidth(10)
    },
})
export default styles;