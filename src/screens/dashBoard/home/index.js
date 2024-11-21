import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { HomeHeader } from "../../../commonComponents";
import styles from "./styles";
import { Input } from "../../../commonComponents";
import { Icons } from "../../../utils/icons";
import { Slider, RecentlyBought, ShopByCategory, Offers, LowestPrice, BestPrice, Coupons,NotFound } from "./components";

export function Home() {
    return (
        <SafeAreaView style={styles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <HomeHeader />
                <Input placeholder={'Search Products here..'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />}  style={styles.input}/>
                <Slider />
                <RecentlyBought />
                <ShopByCategory />
                <Offers />
                <LowestPrice headerData={{ title: 'Lowest Price', subtitle: 'Pay less, Get More' }} />
                <BestPrice headerData={{ title: 'Everyday Essentials', subtitle: 'Best price ever of all the time' }} />
                <Coupons />
                <View style={styles.priceView}>
                    <LowestPrice headerData={{ title: 'Lowest Price', subtitle: 'Pay less, Get More' }} />
                </View>
                <NotFound/>
            </ScrollView>
        </SafeAreaView>
    )
}