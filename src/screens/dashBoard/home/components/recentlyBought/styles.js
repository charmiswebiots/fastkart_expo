import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    mainView: {
        width: '97%',
        height: windowHeight(115),
        overflow: 'hidden',
        justifyContent: 'center',
        marginTop: windowHeight(21),
        marginHorizontal: windowHeight(6.5),
    },
    recentlyBought: {
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishBold',
        paddingHorizontal: windowHeight(20),
    },
    imageView: {
        width: windowWidth(440),
        marginTop: windowHeight(12)
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: windowHeight(14),
        alignItems: 'center',
    },
    recentlyImage: {
        height: windowHeight(55),
        width: windowWidth(85),
        backgroundColor: appColors.white,
        borderRadius: windowHeight(16),
        alignItems: 'center',
        marginHorizontal: windowHeight(5),
        justifyContent: 'center',
    },
    image: {
        width: windowWidth(60),
        height: windowHeight(60)
    },
 
    loaderContainer: {
        flexDirection: 'row',
        paddingHorizontal: windowHeight(14),
        alignItems: 'center',
    },
    skeletonItem: {
        height: windowHeight(55),
        width: windowWidth(85),
        backgroundColor: appColors.loaderBackground,
        borderRadius: windowHeight(16),
        alignItems: 'center',
        marginHorizontal: windowHeight(5),
        justifyContent: 'center',
    },
    skeletonImage: {
        width: windowWidth(60),
        height: windowHeight(60),
        borderRadius: windowHeight(8),
        backgroundColor: appColors.loaderBackground,
    },
})
export default styles;