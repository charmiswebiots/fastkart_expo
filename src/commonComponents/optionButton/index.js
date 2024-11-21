import { View } from "react-native";
import styles from "./styles";
import { Button } from "../../commonComponents/index";
import appColors from "../../theme/appColors";

export function OptionButton(props) {
    return (
        <View style={[props.style ? props.style : styles.mainView]}>
            <Button text={props.txt1} style={styles.closeBtn} color={appColors.primary} onPress={props.onPress1} />
            <Button text={props.txt2} style={styles.applyBtn} color={appColors.white} onPress={props.onPress2} />
        </View>
    )
}