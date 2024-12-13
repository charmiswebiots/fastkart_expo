import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    filter: {
        fontFamily: 'mulishSemiBold',
        fontSize: fontSizes.FONT24,
        color:appColors.black,
    },
    columnWrapperStyle: {
        justifyContent: 'space-between',
        flexDirection:"row",
    },
    listView: {
        width: '49%',
        alignItems: 'center',
        height: windowHeight(54),
        justifyContent: 'center',
        borderWidth: 0.6,
        borderRadius: windowWidth(6),
        marginTop: windowHeight(16),
    },
    txt: {
        fontSize: fontSizes.FONT18,
        fontFamily: 'mulishSemiBold',
        color:appColors.gray,
    }
})
export default styles;