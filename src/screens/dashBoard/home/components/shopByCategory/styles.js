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
        // marginLeft: windowWidth(10),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal:windowHeight(4),

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
        // width: windowWidth(100),
        // height:windowHeight(25),
        fontFamily: 'mulishBold',
        textAlign: 'center',
        marginTop: windowHeight(10)
    },
})
export default styles;