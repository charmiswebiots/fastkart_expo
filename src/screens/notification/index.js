import { SafeAreaView } from "react-native";
import styles from "./styles";
import { Header } from "../../commonComponents";
import { AlertView, NotificationsView } from "./components";
import { useTheme } from "@react-navigation/native";

export function Notification({ navigation }) {

    const home = () => {
        navigation.navigate('Home')
    }
    const { colors } = useTheme()
    
    return (
        <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
            <Header titleText={'Notification'} isText onPress={() => navigation.goBack()} imageOnPress={home} />
            <AlertView />
            <NotificationsView />
        </SafeAreaView>
    )
}