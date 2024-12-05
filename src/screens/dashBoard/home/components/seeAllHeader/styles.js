import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";


const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: windowHeight(16),
        marginTop: windowHeight(10),
        flexDirection:'row',
        paddingHorizontal:windowHeight(7),
    },
    title: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishBold',
        textAlign:'left',
    },
    subTitle: {
        fontSize: fontSizes.FONT19,
        color: appColors.content,
        fontFamily: 'mulishSemiBold',
    },
    seeAll: {
        fontSize: fontSizes.FONT20,
        color: appColors.primary,
        fontFamily: 'mulishSemiBold',
    },
})
export default styles;