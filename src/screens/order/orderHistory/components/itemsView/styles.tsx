import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    listView: {
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(15),
        paddingVertical: windowHeight(10),
        paddingHorizontal: windowWidth(18),
        borderRadius: windowWidth(12),
        backgroundColor: appColors.gray,
    },
    subView: {
        marginTop: windowHeight(10),
        justifyContent: 'space-between',
        borderBottomWidth: windowHeight(0.3),
        borderBottomColor: 'black',
        paddingBottom: windowHeight(10)
    },
    data: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT18,
    },
    add: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT18,
        color: appColors.content,
        marginTop: windowHeight(4)
    },
    paidView: {
        marginTop: windowHeight(4),
        flexDirection: "row",
    },
    orderAgain: {
        justifyContent: 'space-between',
        marginTop: windowHeight(10)
    },
    reteNReview: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT17,
        color: appColors.content
    },
    paid: {
        color: appColors.primary,
    },
    containerStyle: {
        paddingBottom: windowHeight(220)
    },
    loaderContainer: {
        width: '95%',
        marginTop: windowHeight(15),
        paddingVertical: windowHeight(14.8),
        borderRadius: windowHeight(10),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: appColors.gray,
    },
    skeletonImage: {
        width: windowWidth(80),
        height: windowHeight(55),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(5),
        alignItems: "center",
        alignSelf: 'center',
        left: windowWidth(17),
        paddingHorizontal: windowHeight(10),
    },
    skeletonText: {
        width: windowWidth(290),
        height: windowHeight(15),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(2),
        bottom: windowHeight(19),
        marginHorizontal: windowHeight(18)
    },
    skeletonText1: {
        width: windowWidth(190),
        height: windowHeight(12.5),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(4),
        right: windowHeight(272),
        borderRadius: windowHeight(2),
    },
    skeletonText2: {
        width: windowWidth(80),
        height: windowHeight(12.5),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(48),
        right: '665%',
        borderRadius: windowHeight(2),
    },
    skeletonText3: {
        width: windowWidth(80),
        height: windowHeight(12.5),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(48),
        right: '650%',
        borderRadius: windowHeight(2),
    },
    skeletonText4: {
        width: windowWidth(80),
        height: windowHeight(12.5),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(48),
        right: '380%',
        borderRadius: windowHeight(2),
    }
})
export default styles;