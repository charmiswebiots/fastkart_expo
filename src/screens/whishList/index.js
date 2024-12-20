import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Header } from "../../commonComponents";
import { Icons } from "../../utils/icons";
import { GlobalStyle } from "../../styles/style";
import { WhishListProduct } from "./components";
import { useNavigation } from "@react-navigation/native";
import { CommonModal, DeleteProductModal } from '../../otherComponents'
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";
import { cart } from "../data";
import { windowHeight } from "../../theme/appConstant";

// export function WhishList() {
//     const {colors}=useTheme()
//     const {t}=useValues()

//     const navigation=useNavigation()
//     const [showModal, setShowModal] = useState(false);
//     const visibleModal = () => {
//         setShowModal(!showModal)
//     }

//     return (
//         <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
//             <Header
//                 onPress={() => navigation.goBack()}
//                 isText
//                 image={<Icons.Mywishlist />}
//                 titleText={t('wishlistPage.myWishlist')} 
//                 titleText1={'(4 Items)'}
//                 imageOnPress={() => navigation.navigate('Cart')}
//             />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <WhishListProduct  onDelete={visibleModal}/>
//             </ScrollView>
//             <CommonModal modal={<DeleteProductModal onPress={visibleModal} />} showModal={showModal} visibleModal={visibleModal}/>
//         </SafeAreaView>
//     );
// }




export function WhishList() {
    const { colors } = useTheme();
    const { t } = useValues();

    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false);
    const [itemCount, setItemCount] = useState(cart.length); // Initialize with total items

    const visibleModal = () => {
        setShowModal(!showModal);
    };

    const handleItemDelete = (newCount) => {
        setItemCount(newCount); // Update item count
    };

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                image={<Icons.Mywishlist />}
                titleText={t('wishlistPage.myWishlist')}
                titleText1={` (${itemCount} Items)`}
                imageOnPress={() => navigation.navigate('Cart')}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <WhishListProduct onItemDelete={handleItemDelete} />
            </ScrollView>
            <CommonModal modal={<DeleteProductModal onPress={visibleModal} />} showModal={showModal} visibleModal={visibleModal} />
        </SafeAreaView>
    );
}


