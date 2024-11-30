import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import { Header } from "../../commonComponents";
import { AlertView, NotificationsView } from "./components";

export function Notification({ navigation }) {
    return (
        <SafeAreaView style={[styles.mainView]}>
            <Header titleText={'Notification'} isText onPress={() => navigation.goBack()} />
            <AlertView />
            <NotificationsView />
        </SafeAreaView>
    )
}