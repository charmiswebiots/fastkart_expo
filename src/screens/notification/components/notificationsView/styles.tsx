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
    loaderContainer: {
        marginTop: windowHeight(25),
        alignItems: 'center',
    },
    icon: {
        height: windowHeight(42),
        width: windowWidth(65),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: windowHeight(6.5),
        marginHorizontal: windowHeight(2.5),
    },
    skeletonIcon: {
        height: windowHeight(48),
        width: windowWidth(65),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(6.5),
        marginHorizontal: windowHeight(13),
    },
    titleView: {
        justifyContent: 'space-between',
        width: windowWidth(370),
    },
    skeletonText:{
        height: windowHeight(17),
        width: windowWidth(250),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(2.5),
        bottom:windowHeight(11.5)
    },
    skeletonText1:{
        height: windowHeight(17),
        width: windowWidth(100),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(2.5),
        right:windowHeight(172),
        top:windowHeight(10)
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
    skeletonText2:{
        height: windowHeight(17),
        width: windowWidth(65),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(2.5),
        bottom:windowHeight(10.8),
        right:windowHeight(38),
    },
    tag: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT16,
        color: appColors.primary,
        paddingHorizontal: windowWidth(13),
        height: windowHeight(24),
        textAlignVertical: 'center',
        borderRadius: windowWidth(6),
        backgroundColor: appColors.drawer,
    },
    offerLeft: {
        marginHorizontal: windowWidth(10)
    },
})
export default styles;