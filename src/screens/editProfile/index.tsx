// import { SafeAreaView, ScrollView } from "react-native";
// import { GlobalStyle } from "../../styles/style";
// import { Header } from "../../commonComponents";
// import { ProfileView, DetailsView, DatePickerView, ChangePasswordView } from "./components";
// import { useState } from "react";
// import { Button } from "../../commonComponents";
// import appColors from "../../theme/appColors";
// import styles from './styles';
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function EditProfile({ navigation }) {
//     const {t}=useValues()
//     const { colors } = useTheme()
//     const [date, setDate] = useState('28-12-1990');
//     const [showDatePicker, setShowDatePicker] = useState(false);

//     const onCancel = () => {
//         setShowDatePicker(false);
//     };

//     const onConfirm = (value, date) => {
//         setShowDatePicker(value);
//         setDate(date);
//     };

//     const openDatePicker = () => {
//         setShowDatePicker(true);
//     };

//     const home = () => {
//         navigation.navigate('Home')
//     }

//     return (
//         <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <Header
//                     onPress={() => navigation.goBack()}
//                     isText
//                     titleText={t('editProfilePage.editProfile')}
//                     imageOnPress={home}
//                 />
//                 <ProfileView />
//                 <DetailsView date={date} onPress={openDatePicker} />
//                 <DatePickerView
//                     onCancel={onCancel}
//                     onConfirm={onConfirm}
//                     showDatePicker={showDatePicker}
//                 />
//                 <ChangePasswordView />
//                 <Button
//                     text={t('editProfilePage.updateSettings')}
//                     style={styles.btn}
//                     color={appColors.white}
//                 />
//             </ScrollView>

//         </SafeAreaView>
//     );
// }







import { SafeAreaView, ScrollView } from "react-native";
import { GlobalStyle } from "../../styles/style";
import { Header } from "../../commonComponents";
import { ProfileView, DetailsView, DatePickerView, ChangePasswordView } from "./components";
import { useState } from "react";
import { Button } from "../../commonComponents";
import appColors from "../../theme/appColors";
import styles from './styles';
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface EditProfileProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export function EditProfile({ navigation }: EditProfileProps): JSX.Element {
    const { t } = useValues();
    const { colors } = useTheme();
    const [date, setDate] = useState<string>('28-12-1990');
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const onCancel = (): void => {
        setShowDatePicker(false);
    };

    const onConfirm = (value: boolean, date: string): void => {
        setShowDatePicker(value);
        setDate(date);
    };

    const openDatePicker = (): void => {
        setShowDatePicker(true);
    };

    const home = (): void => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={t('editProfilePage.editProfile')}
                    imageOnPress={home}
                />
                <ProfileView />
                <DetailsView date={date} onPress={openDatePicker} />
                <DatePickerView
                    onCancel={onCancel}
                    onConfirm={onConfirm}
                    showDatePicker={showDatePicker}
                />
                <ChangePasswordView />
                <Button
                    text={t('editProfilePage.updateSettings')}
                    style={styles.btn}
                    color={appColors.white}
                />
            </ScrollView>
        </SafeAreaView>
    );
}