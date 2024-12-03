import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import appColors from "../../theme/appColors";
import { Icons } from "../../utils/icons";
import { Header, AddNew, Button } from "../../commonComponents";
import { CommonModal, AddAddressModal } from '../../otherComponents'
import { AddressView } from "./components";
import { useState } from "react";

export function SelectAddress({ navigation }) {
    const [showModal, setShowModal] = useState(false);

    const visibleModal = () => [
        setShowModal(!showModal)
    ]

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: appColors.white }]}>
            <Header
                onPress={() => navigation.goBack()}
                image={<Icons.search />}
                isText
                titleText={'Select delivery address'} />
            <AddNew text={'Add New Address'} onPress={visibleModal} />
            <AddressView />

            <Button text={'Proceed to Payment'} style={styles.btn}
                color={appColors.white} />
            <CommonModal
                modal={
                    <AddAddressModal showModal={visibleModal} />}
                showModal={showModal}
                visibleModal={visibleModal}
            />
        </SafeAreaView>

    )
}