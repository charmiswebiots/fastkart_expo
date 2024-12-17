import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: windowHeight(10),
        paddingHorizontal: windowWidth(20)
    },
    line: {
        width: '100%',
        height: windowHeight(0),
        backgroundColor: appColors.text,
        marginTop: windowHeight(20)
    },
    shopByCategory: {
        position: 'absolute',
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishBold',
        top: windowHeight(6),
        width: windowWidth(220),
        textAlign: 'center',
    },
    list: {
        paddingHorizontal: windowWidth(20)
    },
    separator: {
        height: windowHeight(1)
    },
    listView: {
        width: windowWidth(100),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: windowHeight(4),

    },
    imageView: {
        height: windowHeight(60),
        width: windowWidth(100),
        alignItems: 'center',
        borderRadius: windowHeight(20),
        top: windowHeight(8),
        justifyContent: 'center'
    },
    image: {
        width: windowWidth(85),
        height: windowHeight(100),
    },
    name: {
        fontFamily: 'mulishBold',
        textAlign: 'center',
        marginTop: windowHeight(10)
    },
    skeletonImageView: {
        width: windowWidth(70),
        height: windowWidth(70),
        borderRadius: windowHeight(2.4),
        backgroundColor: appColors.loaderBackground,
        marginTop: windowHeight(15),
    },
    skeletonText: {
        height: windowHeight(8),
        borderRadius: windowHeight(2.4),
        marginTop: windowHeight(12),

        backgroundColor: appColors.loaderBackground,
    },
    skeletonItem: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        margin: windowHeight(8),
    },
    listView: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: windowHeight(3.5),
    },
    separator: {
        height: windowHeight(10),
    },
})
export default styles;