import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../../../../theme/appConstant";
import appColors from "../../../../../theme/appColors";

const styles = StyleSheet.create({
    list: {
        marginTop: windowHeight(1.5),
        paddingVertical: windowHeight(10),
        backgroundColor: appColors.gray,
    },
    name: {
        fontSize: fontSizes.FONT22,
        fontFamily: 'mulishSemiBold',
    },
    category: {
        paddingHorizontal: windowWidth(22),
        gap: 20,
        flexDirection: 'row'
    },
})
export default styles;