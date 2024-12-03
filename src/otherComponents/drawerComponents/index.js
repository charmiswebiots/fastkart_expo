// import React from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import styles from "./styles";
// import { ProfileView } from "../../screens/account/components";
// import { MenuItem } from "./components";
// import { DrawerItems } from "../../screens/data";
// import appColors from "../../theme/appColors";
// import { Switch } from "../../commonComponents";
// import { Icons } from "../../utils/icons";

// export function DrawerComponent() {

//     const [showModal, setShowModal] = useState(false);
//     const [rtl, setRtl] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);

//     const goToScreen = (key) => {
//         if (key != 5 && key != 9) {
//             navigation.toggleDrawer();
//         }
//         if (key === 0) {

//         } else if (key === 1) {
//             navigation.navigate('PagesList')
//         } else if (key === 2) {
//             navigation.navigate('Category')
//         } else if (key === 3) {
//             navigation.navigate('OrderHistory')
//         } else if (key === 4) {
//             navigation.navigate('Wishlist')
//         } else if (key === 5) {
//             visibleModal()
//         } else if (key === 6) {
//             navigation.navigate('Account')
//         } else if (key === 7) {
//             navigation.navigate('Notification')
//         } else if (key === 8) {
//             navigation.navigate('EditProfile')
//         } else if (key === 9) {
//             visibleCurrencyModal()
//         }
//     }
//     const visibleModal = () => {
//         setShowModal(!showModal)
//     }
//     const visibleCurrencyModal = () => {
//         setShowCurrencyModal(!showCurrencyModal)
//     }
//     return (
//         <View>
//             <ScrollView showsVerticalScrollIndicator={false} style={styles.mainView}>
//                 <ProfileView />
//                 {DrawerItems.filter((_, key) => key !== 1 && key !== 6).map((item, key) => (
//                     <MenuItem
//                         key={key}
//                         width="100%"
//                         icon={item.icons}
//                         text={item.name}
//                         showSwitch={item.showSwitch}
//                         onPress={() => goToScreen(key)}
//                     />
//                 ))}
//                 <Switch
//                     text="RTL"
//                     icon={<Icons.rtl />}
//                     isOn={rtl}
//                     onToggle={() => setRtl(!rtl)}
//                 />
//                 <Switch
//                     text="Dark"
//                     icon={<Icons.dark />}
//                     isOn={darkMode}
//                     onToggle={() => setDarkMode(!darkMode)}
//                 />
//                 <TouchableOpacity onPress={login} activeOpacity={0.7} style={[styles.signOutView, { backgroundColor: appColors.gray }]}>
//                     <Icons.signOut />
//                     <Text style={[styles.signOut]}>Sign Out</Text>
//                 </TouchableOpacity>
//                 {/* <SupportView colors={colors} t={t} txtAlign={textAlign} viewAlign={viewAlign} /> */}
//             </ScrollView>
//         </View>
//     )
// }




import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity, Text, ScrollView ,View} from "react-native";
import styles from "./styles";
import { ProfileView } from "../../screens/account/components";
import { MenuItem,SupportView } from "./components";
import { DrawerItems } from "../../screens/data";
import appColors from "../../theme/appColors";
import { Switch } from "../../commonComponents";
import { Icons } from "../../utils/icons";
import { useNavigation } from "@react-navigation/native";

export function DrawerComponent() {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [rtl, setRtl] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const goToScreen = (key) => {
        if (key != 5 && key != 9) {
            navigation.toggleDrawer();
        }
        if (key === 0) {

        } else if (key === 1) {
            navigation.navigate('PagesList')
        } else if (key === 2) {
            navigation.navigate('Category')
        } else if (key === 3) {
            navigation.navigate('OrderHistory')
        } else if (key === 4) {
            navigation.navigate('Wishlist')
        } else if (key === 5) {
            visibleModal()
        } else if (key === 6) {
            navigation.navigate('Account')
        } else if (key === 7) {
            navigation.navigate('Notification')
        } else if (key === 8) {
            navigation.navigate('EditProfile')
        } else if (key === 9) {
            visibleCurrencyModal()
        }
    }

    const visibleModal = () => {
        setShowModal(!showModal);
    };

    const visibleCurrencyModal = () => {
        setShowCurrencyModal(!showCurrencyModal);
    };

    const login=()=>{
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={{ backgroundColor: appColors.white, flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.mainView}>
                <ProfileView />
                {DrawerItems.filter((_, key) => key >= 0 && key <= 10 ).map((item, key) => (
                    <MenuItem
                        key={key}
                        width="100%"
                        icon={item.icons}
                        text={item.name}
                        showSwitch={item.showSwitch}
                        onPress={() => goToScreen(key)}
                    />
                ))}
                <Switch
                    text="RTL"
                    icon={<Icons.rtl />}
                    isOn={rtl}
                    onToggle={() => setRtl(!rtl)}
                />
                <Switch
                    text="Dark"
                    icon={<Icons.dark />}
                    isOn={darkMode}
                    onToggle={() => setDarkMode(!darkMode)}
                />
                <TouchableOpacity onPress={login}  activeOpacity={0.7} style={[styles.signOutView, { backgroundColor: appColors.gray }]}>
                    <Icons.signOut />
                    <Text style={[styles.signOut]}>Sign Out</Text>
                </TouchableOpacity>
                <SupportView/>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
}
