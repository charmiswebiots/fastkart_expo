import { Header, Coupon } from "../../../commonComponents";
import { WhishListProduct } from "../../whishList/components";
import { DeleteProductModal, CommonModal, CouponModal } from "../../../otherComponents";
import React from "react";
import { useState } from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import styles from "./styles";
import { TotalView } from "./components";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";

export function Cart({ navigation }) {
    const {t}=useValues()
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const { colors } = useTheme()

    const productDetails = () => {
        navigation.navigate('ProductsDetails')
    }

    const visibleModal = () => {
        setShowModal(!showModal)
    }

    const visibleDeleteModal = () => {
        setShowDeleteModal(!showDeleteModal)
    }

    const address = () => {
        navigation.navigate('Address')
    }

    const home = () => {
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
            <Header
                onPress={() => navigation.goBack()}
                isText
                titleText={t('cartPage.myCart')}
                imageOnPress={home}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <WhishListProduct onPress={productDetails} />
                <CommonModal modal={<DeleteProductModal onPress={visibleDeleteModal} />} showModal={showDeleteModal} visibleModal={visibleDeleteModal} />
                <View style={styles.view}>
                    <Coupon price={50} onPress={visibleModal} onOrder={t('myOffersArr.onOrder')} onOrderAbove={t('myOffersArr.aboveOn')} code={'SCD450'} />
                    <TotalView onPress={address} />
                </View>
            </ScrollView>
            <CommonModal
                modal={<CouponModal showModal={visibleModal} price={50} subTxt={'250.00'} code={'SCD450'} />}
                showModal={showModal}
                visibleModal={visibleModal} />
        </SafeAreaView>
    )
}