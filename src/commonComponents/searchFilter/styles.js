import { StyleSheet } from "react-native";
import { windowHeight, fontSizes, windowWidth } from "../../theme/appConstant";
import appColors from "../../theme/appColors";

const styles = StyleSheet.create({
    inputView: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '93%',
        justifyContent: 'space-between',
        flexDirection:'row',
        marginTop:windowHeight(1.5),
    },
    input:{
        paddingHorizontal:windowHeight(42),
        width:windowWidth(367),
        marginHorizontal:windowHeight(2),
    },
    filter: {
        fontSize: fontSizes.FONT23,
        color: appColors.primary,
        fontFamily: 'mulishSemiBold',  
    },
})
export default styles;