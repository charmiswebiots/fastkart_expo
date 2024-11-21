import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    listView: {
        marginHorizontal: windowWidth(20),
        marginTop: windowHeight(15),
        paddingVertical: windowHeight(10),
        paddingHorizontal: windowWidth(18),
        borderRadius: windowWidth(12),
        backgroundColor:appColors.gray,
    },
    subView: {
        marginTop: windowHeight(10),
        justifyContent: 'space-between',
        flexDirection:"row",
        borderBottomWidth: windowHeight(1.5),
        borderBottomColor:appColors.line,
        paddingBottom: windowHeight(10)
    },
    idView: {
        flexDirection: 'row'
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
        flexDirection:"row",
    },
    orderAgain: {
        flexDirection:"row",
        flexDirection: 'row',
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
})
export default styles;