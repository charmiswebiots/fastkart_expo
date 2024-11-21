import { StyleSheet } from "react-native";
import {
    fontSizes,
    windowHeight,
    windowWidth,
} from "../../../../theme/appConstant";
import Appcolor from '../../../../theme/colors';
import Commonfonts from "../../../../theme/commonfonts";

export default priceViewStyles = StyleSheet.create({
    price: {
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: windowHeight(80),
        backgroundColor: Appcolor.primary,
        width: '96%',
        alignSelf: 'center',
        borderRadius: windowWidth(4),
        paddingHorizontal: windowWidth(10),
        alignItems: 'center',
        paddingVertical: windowHeight(10)
    },
    listItem: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulishBold,
        color: Appcolor.white
    },
    arrow: {
        flexDirection: 'row'
    },
    viewCart: {
        fontSize: fontSizes.FONT18,
        fontFamily: Commonfonts.mulishBold,
        color: Appcolor.white,
        marginRight: windowWidth(6)
    },
});