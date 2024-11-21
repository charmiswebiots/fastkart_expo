import { View,SafeAreaView } from "react-native";
import styles from "./styles";
import { Header } from "../../commonComponents";
import { AlertView, NotificationsView } from "./components";

export function Notification() {
    return (
        <SafeAreaView style={[styles.mainView]}>          
          <Header titleText={'Notification'} isText/>
            <AlertView />
            <NotificationsView/>
        </SafeAreaView>
    )
}