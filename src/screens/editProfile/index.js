import { SafeAreaView, ScrollView } from "react-native";
import { GlobalStyle } from "../../styles/style";
import { Header } from "../../commonComponents";
import { ProfileView, DetailsView, DatePickerView, ChangePasswordView } from "./components";
import { useState } from "react";
import { Button } from "../../commonComponents";
import appColors from "../../theme/appColors";
import styles from './styles';
import { useTheme } from "@react-navigation/native";

export function EditProfile({ navigation }) {
    const { colors } = useTheme()
    const [date, setDate] = useState('28-12-1990');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onCancel = () => {
        setShowDatePicker(false);
    };

    const onConfirm = (value, date) => {
        setShowDatePicker(value);
        setDate(date);
    };

    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const home = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={'Edit Profile'}
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
                    text={'Update Settings'}
                    style={styles.btn}
                    color={appColors.white}
                />
            </ScrollView>

        </SafeAreaView>
    );
}
