import appColors from "../../../theme/appColors";
import { Header, Coupon } from "../../../commonComponents";
import { WhishListProduct } from "../../whishList/components";
import { useNavigation } from "@react-navigation/native";
import { DeleteProductModal, CommonModal, CouponModal } from "../../../otherComponents";
import React from "react";
import { useState } from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import styles from "./styles";
import { TotalView } from "./components";

export function Cart() {
    const navigation = useNavigation()
    const [showModal, setShowModal] = useState(false);
        const [showDeleteModal, setShowDeleteModal] = useState(false);


    const visibleModal = () => {
        setShowModal(!showModal)
    }
    const visibleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal)
    }
    return (
        <SafeAreaView style={styles.mainView}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={'My Cart'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <WhishListProduct onDelete={visibleDeleteModal} />
                <CommonModal modal={<DeleteProductModal onPress={visibleDeleteModal} />} showModal={showDeleteModal} visibleModal={visibleDeleteModal} />
                <View style={styles.view}>
                    <Coupon price={50} onPress={visibleModal} onOrder={'on your first order'} onOrderAbove={'on order above $250.00'} code={'SCD450'} />
                    <TotalView/>
                </View>
            </ScrollView>
            <CommonModal
                modal={<CouponModal showModal={visibleModal} price={50} subTxt={'250.00'} code={'SCD450'} />}
                showModal={showModal}
                visibleModal={visibleModal} />
        </SafeAreaView>
    )
}