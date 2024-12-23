// import { View, TouchableOpacity } from "react-native";
// import styles from "./styles";
// import { Input } from "../../../../commonComponents";
// import { Icons } from "../../../../utils/icons";
// import { windowWidth } from "../../../../theme/appConstant";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../../../utils/context";

// export function DetailsView(props) {
//     const { colors } = useTheme()
//     const { t } = useValues()
//     return (
//         <View style={styles.container}>
//             <Input
//                 style={styles.input}
//                 width={windowWidth(30)}

//                 placeholder={t('orderTrackingPage.name')}
//                 rightIcon={<Icons.fullName color />}
//             />
//             <Input
//                 style={styles.input}
//                 placeholder={t('editprofilePage.demoemail')}
//                 rightIcon={<Icons.atSign />}
//             />
//             <Input
//                 style={styles.input}
//                 placeholder={'9876543210'}
//                 keyboardType={'numeric'}
//                 rightIcon={<Icons.call color={colors.text} />}
//             />
//             <Input
//                 style={styles.input}
//                 value={props.date}
//                 editable={false}
//                 rightIcon={
//                     <TouchableOpacity onPress={props.onPress}>
//                         <Icons.calender color={colors.text} />
//                     </TouchableOpacity>
//                 }
//             />
//         </View>
//     )
// }






import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Input } from "../../../../commonComponents";
import { Icons } from "../../../../utils/icons";
import { windowWidth } from "../../../../theme/appConstant";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../utils/context";

interface DetailsViewProps {
    date: string;
    onPress: () => void;
}

export function DetailsView(props: DetailsViewProps): JSX.Element {
    const { colors } = useTheme();
    const { t } = useValues();
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                width={windowWidth(30)}
                placeholder={t('orderTrackingPage.name')}
                rightIcon={<Icons.fullName color />}
            />
            <Input
                style={styles.input}
                placeholder={t('editprofilePage.demoemail')}
                rightIcon={<Icons.atSign />}
            />
            <Input
                style={styles.input}
                placeholder={'9876543210'}
                keyboardType={'numeric'}
                rightIcon={<Icons.call color={colors.text} />}
            />
            <Input
                style={styles.input}
                value={props.date}
                editable={false}
                rightIcon={
                    <TouchableOpacity onPress={props.onPress}>
                        <Icons.calender color={colors.text} />
                    </TouchableOpacity>
                }
            />
        </View>
    );
}