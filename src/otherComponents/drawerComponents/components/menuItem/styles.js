import { StyleSheet } from "react-native";
import appColors from "../../../../theme/appColors";
import { windowHeight, fontSizes } from "../../../../theme/appConstant";

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: windowHeight(18)
    },
    txt: {
        fontSize: fontSizes.FONT20,
        fontFamily: 'mulishSemiBold',
        color: appColors.black,
        marginTop:windowHeight(3)
    },
    txtLeft: {
        marginHorizontal:windowHeight(12)
    },
    txtRight: {
    },
    arrow: {
        borderWidth: 0.5,
        width: windowHeight(24),
        height: windowHeight(24),
        borderRadius: windowHeight(12),
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: appColors.drawer, 
        backgroundColor: appColors.drawer 
    },
    text: {
        flexDirection: 'row'
    },
})
export default styles;