import { StyleSheet } from "react-native";
import { windowHeight,fontSizes,windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles=StyleSheet.create({
    option: {
        width: windowWidth(47),
        height: windowHeight(32),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:appColors.primary,
        borderRadius: windowHeight(4),
    },
    location: {
        flexDirection:"row",
        height: windowHeight(120),
        marginTop: windowHeight(20)
    },
    sepratorImg: {
        position: 'absolute',
        alignSelf: 'center',
        resizeMode: 'contain',
        height: windowHeight(100)
    },
    homeView: {
        justifyContent: 'space-between',
        height: windowHeight(100)
    },
    storeLocation: {
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth(10),
    },
    storeRight: {
        height:windowHeight(104),
    },
    locationTxt: {
        fontSize: fontSizes.FONT19,
        fontFamily:'mulishSemiBold',
    },
    storeLocationTxt: {
        fontSize: fontSizes.FONT18,
        fontFamily:'mulishSemiBold',
        color: appColors.content
    },
    btn: {
        width: '100%',
        backgroundColor: appColors.primary,
    },
})
export default styles;