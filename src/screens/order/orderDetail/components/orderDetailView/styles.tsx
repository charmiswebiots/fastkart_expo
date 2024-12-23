import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    orderDetailView: {
        width: '92%',
        alignSelf: 'center',
        backgroundColor: appColors.primary,
        borderRadius: windowHeight(10),
        alignItems: 'center',
        paddingHorizontal: windowWidth(22),
        paddingVertical: windowHeight(12),
    },
    orderDetailView1:{
        width: '92%',
        alignSelf: 'center',
        // backgroundColor: appColors.gray,
        borderRadius: windowHeight(10),
        alignItems: 'center',
        paddingHorizontal: windowWidth(22),
        paddingVertical: windowHeight(12),
    },
    idView: {
        marginHorizontal: windowWidth(10),
    },
    id: {
        fontSize: fontSizes.FONT18,
        color: appColors.white,
        fontFamily: 'mulishSemiBold'
    },
    orderDeliver: {
        fontSize: fontSizes.FONT24,
        color: appColors.white,
        fontFamily: 'mulishSemiBold',
        textAlign: 'left',
    }
})
export default styles;