import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { HomeHeader } from "../../../commonComponents";
import styles from "./styles";
import { Input } from "../../../commonComponents";
import { Icons } from "../../../utils/icons";
import { Slider, RecentlyBought, ShopByCategory, Offers, LowestPrice, BestPrice, Coupons, NotFound } from "./components";
import { useTheme } from "@react-navigation/native";


export function Home({ navigation }) {
    const {colors}=useTheme()

    const productDetails = () => {
        navigation.navigate('ProductsDetails')

    }
    const shopPage = () => {
        navigation.navigate('ShopPage')
    }


    const toogle = () => {
        navigation.openDrawer();
    };

    return (
        <SafeAreaView style={[styles.mainView,{backgroundColor:colors.background}]}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <HomeHeader navigation={navigation} toogle={toogle} />
                <Input placeholder={'Search Products here..'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
                <Slider />
                <RecentlyBought onPress={productDetails} />
                <ShopByCategory onPress={shopPage} />
                <Offers onPress={productDetails} />
                <LowestPrice headerData={{ title: 'Lowest Price', subtitle: 'Pay less, Get More' }} onPress={productDetails} />
                <BestPrice headerData={{ title: 'Everyday Essentials', subtitle: 'Best price ever of all the time' }} onPress={productDetails} />
                <Coupons />
                <View style={styles.priceView}>
                    <LowestPrice headerData={{ title: 'Lowest Price', subtitle: 'Pay less, Get More' }} onPress={productDetails} />
                </View>
                <NotFound />
            </ScrollView>
        </SafeAreaView>
    )
}

