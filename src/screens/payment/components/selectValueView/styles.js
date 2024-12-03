import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../theme/appConstant";
import appColors from "../../../../theme/appColors";

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: windowHeight(1),
        backgroundColor: appColors.placeholder,
        marginTop: windowHeight(18)
    },
    list: {
        marginHorizontal: windowWidth(24),
        marginTop: windowHeight(18)
    },
    listView: {
        paddingVertical: windowHeight(20),
        flexDirection: "row"
    },
    arrowView: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: "row"
    },
    type: {
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishBold'
    },
    arrow: {
        height: windowHeight(26),
        width: windowHeight(26),
        borderRadius: windowHeight(13),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appColors.drawer,
    },
    select: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: windowHeight(6),
        paddingHorizontal: windowWidth(20),
        marginTop: windowHeight(10),
        borderColor: appColors.primary
    },
    icon: {
        height: windowHeight(50),
        width: windowWidth(50),
        resizeMode: 'contain'
    },
    value: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        marginHorizontal:windowWidth(14)
    },
    selectView: {
        backgroundColor: appColors.primary,
        paddingHorizontal: windowWidth(6),
        position: 'absolute',
        right: 0,
        top: 0,
        paddingVertical: windowHeight(3)
    },
    selectLeft: {
        borderTopEndRadius: windowHeight(5),
        borderBottomStartRadius: windowHeight(5),
    },
    selectRight: {
        borderTopStartRadius: windowHeight(5),
        borderBottomEndRadius: windowHeight(5),
    },
    valueList: {
        alignItems: 'center',
        marginTop: windowHeight(10),
        borderColor: appColors.primary,
        width: windowWidth(190),
        flexDirection: "row",
    },
    valueTxt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        width: windowWidth(190),
    },
    valueLeft: {
        marginHorizontal: windowHeight(5),
    },

})
export default styles;