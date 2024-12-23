// import React, { useState } from "react";
// import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
// import { Header } from "../../commonComponents";
// import { Icons } from "../../utils/icons";
// import { GlobalStyle } from "../../styles/style";
// import { WhishListProduct } from "./components";
// import { useNavigation } from "@react-navigation/native";
// import { CommonModal, DeleteProductModal } from '../../otherComponents'
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";
// import { cart } from "../data";






// export function WhishList() {
//     const { colors } = useTheme();
//     const { t } = useValues();

//     const navigation = useNavigation();
//     const [showModal, setShowModal] = useState(false);
//     const [itemCount, setItemCount] = useState(cart.length); 

//     const visibleModal = () => {
//         setShowModal(!showModal);
//     };

//     const handleItemDelete = (newCount) => {
//         setItemCount(newCount); 
//     };

//     return (
//         <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
//             <Header
//                 onPress={() => navigation.goBack()}
//                 isText
//                 image={<Icons.Mywishlist />}
//                 titleText={t('wishlistPage.myWishlist')}
//                 titleText1={` (${itemCount} Items)`}
//                 imageOnPress={() => navigation.navigate('Cart')}
//             />
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 <WhishListProduct onItemDelete={handleItemDelete} />
//             </ScrollView>
//             <CommonModal modal={<DeleteProductModal onPress={visibleModal} />} showModal={showModal} visibleModal={visibleModal} />
//         </SafeAreaView>
//     );
// }


import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from "react-native";
import { Header } from "../../commonComponents";
import { Icons } from "../../utils/icons";
import { GlobalStyle } from "../../styles/style";
import { WhishListProduct } from "./components";
import { useNavigation } from "@react-navigation/native";
import { CommonModal, DeleteProductModal } from '../../otherComponents';
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";
import { cart } from "../data";

export function WhishList(): JSX.Element {
    const { colors } = useTheme();
    const { t } = useValues();

    const navigation = useNavigation();
    const [showModal, setShowModal] = useState<boolean>(false);
    const [itemCount, setItemCount] = useState<number>(cart.length); 

    const visibleModal = (): void => {
        setShowModal(!showModal);
    };

    const handleItemDelete = (newCount: number): void => {
        setItemCount(newCount); 
    };

    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background } as ViewStyle]}>
            <Header
                onPress={() => navigation.goBack()}
                isText={true}
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