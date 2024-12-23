// import React, { useState } from "react";
// import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from "react-native";
// import styles from "./styles";
// import { Header } from "../../commonComponents";
// import appColors from "../../theme/appColors";
// import { MenuItem } from "../../otherComponents/drawerComponents/components";
// import { ProfileView } from "./components";
// import { DrawerItems } from "../data";
// import { Icons } from "../../utils/icons";
// import { CommonModal, SwitchComponents } from "../../otherComponents";
// import { MultiLangaugeModal, CurrencyConverterModal } from "../../otherComponents";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";
// import { windowHeight } from "../../theme/appConstant";

// export function Account({ navigation }) {

//     const home=()=>{
//         navigation.navigate('Home')
//     }
    
//     const {colors}=useTheme()
//     const { isDark,rtl ,t} = useValues();
//     const [showModal, setShowModal] = useState(false);
//     const [showCurrencyModal, setShowCurrencyModal] = useState(false);


//     const goToScreen = (screen) => {
//         const screenMap = {
//             0: 'Home',
//             1: 'Category',
//             2: 'OrderHistory',
//             3: 'whishList',
//             4: 'Language',
//             5: 'Notification',
//             6: "EditProfile",
//             7: 'Currency',
//         };

//         if (screen === 4) {
//             setShowModal(!showModal);
//         } else if (screen === 7) {
//             setShowCurrencyModal(true);
//         } else if (screen in screenMap) {
//             navigation.navigate(screenMap[screen]);
//         }
//     };


//     const login = () => {
//         navigation.navigate('Login')
//     }

//     const visibleModal = () => {
//         setShowModal(!showModal)
//     }
//     const visibleCurrencyModal = () => {
//         setShowCurrencyModal(!showCurrencyModal)
//     }


//     return (
//         <SafeAreaView style={{ backgroundColor: colors.background }}>
//             <CommonModal
//                 modal={<MultiLangaugeModal onPress={visibleModal} navigation={navigation} />}
//                 showModal={showModal}
//                 visibleModal={visibleModal}
//             />

//             <CommonModal
//                 modal={<CurrencyConverterModal onPress={visibleCurrencyModal} navigation={navigation} />}
//                 showModal={showCurrencyModal}
//                 visibleModal={visibleCurrencyModal}
//             />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <Header
//                     onPress={() => navigation.goBack()}
//                     isText
//                     titleText={t('pagesListArr.account')}
//                     imageOnPress={home}
//                 />
//                 <View style={styles.mainView}>
//                     <ProfileView />
//                     {DrawerItems.filter((_, key) => key !== 1 && key !== 6).map((item, key) => (
//                         <MenuItem
//                             key={key}
//                             width="100%"
//                             icon={item.icons}
//                             text={item.name}
//                             showSwitch={item.showSwitch}
//                             onPress={() => goToScreen(key)}
//                             fill={isDark ? appColors.white : appColors.black}

//                         />
//                     ))}
//                     <SwitchComponents style={[styles.switch,{ [rtl ? 'top' : 'top']: rtl ? windowHeight(22) : windowHeight(0) }]}/>
//                     <TouchableOpacity onPress={login} activeOpacity={0.7} style={[styles.signOutView, { backgroundColor: isDark ? colors.primary : appColors.gray }]}>
//                         <Icons.signOut />
//                         <Text style={[styles.signOut,{color:colors.text}]}>{t('account.signOut')}</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// }




import React, { FC, useState } from 'react';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { Header } from '../../commonComponents';
import appColors from '../../theme/appColors';
import { MenuItem } from '../../otherComponents/drawerComponents/components';
import { ProfileView } from './components';
import { DrawerItems } from '../data';
import { Icons } from '../../utils/icons';
import { CommonModal, SwitchComponents } from '../../otherComponents';
import { MultiLangaugeModal, CurrencyConverterModal } from '../../otherComponents';
import { useTheme } from '@react-navigation/native';
import { useValues } from '../../utils/context';
import { windowHeight } from '../../theme/appConstant';

interface AccountProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export const Account: FC<AccountProps> = ({ navigation }) => {
    const home = (): void => {
        navigation.navigate('Home');
    };

    const { colors } = useTheme();
    const { isDark, rtl, t } = useValues();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showCurrencyModal, setShowCurrencyModal] = useState<boolean>(false);

    const goToScreen = (screen: number): void => {
        const screenMap: { [key: number]: string } = {
            0: 'Home',
            1: 'Category',
            2: 'OrderHistory',
            3: 'whishList',
            4: 'Language',
            5: 'Notification',
            6: 'EditProfile',
            7: 'Currency',
        };

        if (screen === 4) {
            setShowModal(!showModal);
        } else if (screen === 7) {
            setShowCurrencyModal(true);
        } else if (screen in screenMap) {
            navigation.navigate(screenMap[screen]);
        }
    };

    const login = (): void => {
        navigation.navigate('Login');
    };

    const visibleModal = (): void => {
        setShowModal(!showModal);
    };

    const visibleCurrencyModal = (): void => {
        setShowCurrencyModal(!showCurrencyModal);
    };

    return (
        <SafeAreaView style={{ backgroundColor: colors.background }}>
            <CommonModal
                modal={<MultiLangaugeModal onPress={visibleModal} navigation={navigation} />}
                showModal={showModal}
                visibleModal={visibleModal}
            />

            <CommonModal
                modal={<CurrencyConverterModal onPress={visibleCurrencyModal} navigation={navigation} />}
                showModal={showCurrencyModal}
                visibleModal={visibleCurrencyModal}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={t('pagesListArr.account')}
                    imageOnPress={home}
                />
                <View style={styles.mainView}>
                    <ProfileView />
                    {DrawerItems.filter((_, key) => key !== 1 && key !== 6).map((item, key) => (
                        <MenuItem
                            key={key}
                            width="100%"
                            icon={item.icons}
                            text={item.name}
                            showSwitch={item.showSwitch}
                            onPress={() => goToScreen(key)}
                            fill={isDark ? appColors.white : appColors.black}
                        />
                    ))}
                    <SwitchComponents style={[styles.switch, { [rtl ? 'top' : 'top']: rtl ? windowHeight(22) : windowHeight(0) }]} />
                    <TouchableOpacity onPress={login} activeOpacity={0.7} style={[styles.signOutView, { backgroundColor: isDark ? colors.primary : appColors.gray }]}>
                        <Icons.signOut />
                        <Text style={[styles.signOut, { color: colors.text }]}>{t('account.signOut')}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};