import { StyleSheet } from "react-native";
import { windowHeight,fontSizes } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles=StyleSheet.create({
    newAddView: {
        width: '91%',
        paddingVertical: windowHeight(10),
        borderRadius: windowHeight(6),
        borderWidth: 1,
        borderColor: appColors.placeholder,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        alignSelf: 'center',
        marginTop: windowHeight(3)
    },
    addAdd: {
        fontSize: fontSizes.FONT22,
        color: appColors.content,
        fontFamily: 'mulishSemiBold'
    },
})
export default styles;