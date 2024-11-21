import { StyleSheet } from "react-native";
import { windowHeight,windowWidth,fontSizes } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    totalView: {
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',
        flexDirection:"row",
        marginTop: windowHeight(15)
    },
    optionView: {
        backgroundColor: appColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth(49),
        borderRadius: windowHeight(4),
        height: windowHeight(33)
    },
    option: {
        marginHorizontal:windowHeight(9),
        // height:windowHeight(20),
        bottom:windowHeight(2),
    },
    orderDate: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        textAlign:"left",
    },
    date: {
        fontSize: fontSizes.FONT18,
        color: appColors.content,
        fontFamily: 'mulishSemiBold'
    },
})
export default styles;