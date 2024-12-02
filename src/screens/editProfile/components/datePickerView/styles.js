import { StyleSheet } from "react-native";
import appColors from "../../../../theme/appColors";
import { fontSizes, windowHeight } from "../../../../theme/appConstant";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: appColors.white,
        borderRadius:windowHeight(10),
        width: '90%',
        padding: windowHeight(12),
    },
    headerText: {
        fontSize: fontSizes.FONT21,
        fontFamily: 'mulishBold',
        color: appColors.primary,
        textAlign: 'center',
        marginBottom: windowHeight(15),
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: windowHeight(15),
    },
    picker: {
        flex: 1,
        marginHorizontal: windowHeight(4),
    },
    pickerLabel: {
        textAlign: 'center',
        fontFamily: 'mulishBold',
        marginBottom: windowHeight(8),
        color: appColors.black,
    },
    scrollPicker: {
        borderWidth: windowHeight(1),
        borderColor: appColors.border,
        borderRadius: windowHeight(6),
        height: windowHeight(90),
    },
    option: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedOption: {
        backgroundColor: appColors.primary,
    },
    optionText: {
        fontSize: 16,
        color: appColors.black,
    },
    selectedOptionText: {
        color: appColors.white,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    cancelButton: {
        backgroundColor:appColors.primary,
    },
    confirmButton: {
        backgroundColor: appColors.primary,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: appColors.white,
    },
})
export default styles;