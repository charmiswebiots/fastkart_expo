// import React from "react";
// import { SafeAreaView } from "react-native";
// import styles from "./styles";
// import { GlobalStyle } from "../../styles/style";
// import appColors from "../../theme/appColors";
// import { Icons } from "../../utils/icons";
// import { Header, AddNew, Button } from "../../commonComponents";
// import { CommonModal, AddAddressModal } from '../../otherComponents'
// import { AddressView } from "./components";
// import { useState } from "react";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function SelectAddress({ navigation }) {
//     const { colors } = useTheme()
//     const [showModal, setShowModal] = useState(false);

//     const {t}=useValues()

//     const visibleModal = () => [
//         setShowModal(!showModal)
//     ]

//     const payment = () => {
//         navigation.navigate('Payment')
//     }

//     return (
//         <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
//             <Header
//                 onPress={() => navigation.goBack()}
//                 image={<Icons.search />}
//                 isText
//                 titleText={t('selectDeliveryAddressPage.selectDeliveryAddress')} />
//             <AddNew text={t('selectDeliveryAddressPage.addNewAddress')} onPress={visibleModal} />
//             <AddressView />

//             <Button text={t('selectDeliveryAddressPage.proceedToPayment')} style={styles.btn}
//                 color={appColors.white} onPress={payment} />
//             <CommonModal
//                 modal={
//                     <AddAddressModal showModal={visibleModal} />}
//                 showModal={showModal}
//                 visibleModal={visibleModal}
//             />
//         </SafeAreaView>

//     )
// }







import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import appColors from "../../theme/appColors";
import { Icons } from "../../utils/icons";
import { Header, AddNew, Button } from "../../commonComponents";
import { CommonModal, AddAddressModal } from '../../otherComponents';
import { AddressView } from "./components";
import { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

interface SelectAddressProps {
    navigation: {
        navigate: (screen: string) => void;
        goBack: () => void;
    };
}

export const SelectAddress: FC<SelectAddressProps> = ({ navigation }) => {
    const { colors } = useTheme();
    const [showModal, setShowModal] = useState<boolean>(false);

    const { t } = useValues();

    const visibleModal = (): void => {
        setShowModal(!showModal);
    };

    const payment = (): void => {
        navigation.navigate('Payment');
    };

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                image={<Icons.search />}
                isText
                titleText={t('selectDeliveryAddressPage.selectDeliveryAddress')} />
            <AddNew text={t('selectDeliveryAddressPage.addNewAddress')} onPress={visibleModal} />
            <AddressView />

            <Button text={t('selectDeliveryAddressPage.proceedToPayment')} style={styles.btn}
                color={appColors.white} onPress={payment} />
            <CommonModal
                modal={
                    <AddAddressModal showModal={visibleModal} />}
                showModal={showModal}
                visibleModal={visibleModal}
            />
        </SafeAreaView>
    );
};