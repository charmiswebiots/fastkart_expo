import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../../theme/appConstant";


const styles = StyleSheet.create({
    mainView: {
        height: windowHeight(110),
        width: '94%',
        alignSelf: 'center',
        borderRadius: windowWidth(10),
        marginTop: windowHeight(10),
        alignItems: 'center',
        paddingHorizontal: windowWidth(20),
    },
    txtLoader: {
        width: windowWidth(60),
        height: windowHeight(50),
        borderRadius: windowWidth(2)
    },
    longTxtLoader: {
        width: windowWidth(220),
        height: windowHeight(20),
        borderRadius: windowWidth(2)
    },
    imgLoader: {
        width: windowWidth(40),
        height: windowHeight(20),
        borderRadius: windowWidth(2),
        marginTop: windowHeight(10)
    },
    listView: {
        alignItems: 'center',
        marginTop: windowHeight(10),
        justifyContent: 'space-between',
        width: windowWidth(310),
    },
    subView: {
        alignItems: 'center'
    },
    imageLoader: {
        width: windowWidth(80),
        height: windowHeight(24),
        borderRadius: windowWidth(20),
    },
    view: {
        width: windowWidth(60),
        height: windowHeight(20),
        borderRadius: windowWidth(2),
    }
})
export default styles;