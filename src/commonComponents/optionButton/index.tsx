// import { View } from "react-native";
// import styles from "./styles";
// import { Button } from "../../commonComponents/index";
// import appColors from "../../theme/appColors";
// import { useValues } from "../../utils/context";

// export function OptionButton(props) {
//     const { viewRtlStyle } = useValues()
//     return (
//         <View style={[props.style ? props.style : styles.mainView, { flexDirection: viewRtlStyle }]}>
//             <Button text={props.txt1} style={styles.closeBtn} color={appColors.primary} onPress={props.onPress1} />
//             <Button text={props.txt2} style={styles.applyBtn} color={appColors.white} onPress={props.onPress2} />
//         </View>
//     )
// }



import { View, ViewStyle } from "react-native";
import styles from "./styles";
import { Button } from "../../commonComponents/index";
import appColors from "../../theme/appColors";
import { useValues } from "../../utils/context";
import { FC } from 'react';

interface OptionButtonProps {
    style?: ViewStyle;
    txt1: string;
    txt2: string;
    onPress1: () => void;
    onPress2: () => void;
}

export const OptionButton: FC<OptionButtonProps> = (props) => {
    const { viewRtlStyle } = useValues();
    return (
        <View style={[props.style ? props.style : styles.mainView, { flexDirection: viewRtlStyle }]}>
            <Button text={props.txt1} style={styles.closeBtn} color={appColors.primary} onPress={props.onPress1} />
            <Button text={props.txt2} style={styles.applyBtn} color={appColors.white} onPress={props.onPress2} />
        </View>
    );
}