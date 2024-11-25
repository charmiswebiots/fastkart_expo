import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { Header } from "../../commonComponents";
import appColors from "../../theme/appColors";
import { Icons } from "../../utils/icons";
import { GlobalStyle } from "../../styles/style";
import { WhishListProduct } from "./components";
import { useNavigation } from "@react-navigation/native";
import { CommonModal,DeleteProductModal} from '../../otherComponents'

export function WhishList() {

    const navigation=useNavigation()
    const [showModal, setShowModal] = useState(false);
    const visibleModal = () => {
        setShowModal(!showModal)
    }
  
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: appColors.white }]}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                image={<Icons.Mywishlist />}
                titleText={'My Wishlist'}
                imageOnPress={() => navigation.navigate('Cart')}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <WhishListProduct  onDelete={visibleModal}/>
            </ScrollView>
            <CommonModal modal={<DeleteProductModal onPress={visibleModal} />} showModal={showModal} visibleModal={visibleModal}/>
        </SafeAreaView>
    );
}
