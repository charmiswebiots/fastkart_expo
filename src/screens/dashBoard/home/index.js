import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { HomeHeader } from "../../../commonComponents";
import styles from "./styles";
import { Input } from "../../../commonComponents";
import { Icons } from "../../../utils/icons";
import { Slider, RecentlyBought, ShopByCategory, Offers, LowestPrice, BestPrice, Coupons, NotFound } from "./components";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../utils/context";


export function Home({ navigation }) {
    const { t } = useValues()
    const { colors } = useTheme()

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
        <SafeAreaView style={[styles.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <HomeHeader navigation={navigation} toogle={toogle} />
                <Input placeholder={'commonText.searchProducts'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
                <Slider />
                <RecentlyBought onPress={productDetails} />
                <ShopByCategory onPress={shopPage} />
                <Offers onPress={productDetails} />
                <LowestPrice headerData={{ title: t('homepage.lowestPrice'), subtitle: t('homepage.payless') }} onPress={productDetails} />
                <BestPrice headerData={{ title: t('homepage.everydayEssentials'), subtitle: t('homepage.bestPrice') }} onPress={productDetails} />
                <Coupons />
                <View style={styles.priceView}>
                    <LowestPrice headerData={{ title: t('homepage.lowestPrice'), subtitle: t('homepage.payless') }} onPress={productDetails} />
                </View>
                <NotFound />
            </ScrollView>
        </SafeAreaView>
    )
}

