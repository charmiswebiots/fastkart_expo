import { View, SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Header } from "../../commonComponents";
import { pagesList } from "../data";
import { GlobalStyle } from "../../styles/style";
import appColors from "../../theme/appColors";
import { MenuItem } from "../../otherComponents/drawerComponents/components";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";


export function PageList({ navigation }) {

    const home = () => {
        navigation.navigate('Home')
    }

    const { colors } = useTheme()
    const { isDark, textRtlStyle } = useValues()

    const goToScreen = (key) => {
        if (key === 0) {
            navigation.navigate('NotFound');
        } else if (key === 1) {
            navigation.navigate('AboutUs')
        } else if (key === 2) {
            navigation.navigate('Account');
        } else if (key === 3) {
            navigation.navigate('Address');
        } else if (key === 4) {
            navigation.navigate('SelectAddress');
        } else if (key === 5) {
            navigation.navigate('Cart');
        } else if (key === 6) {
            navigation.navigate('Category');
        } else if (key === 7) {
            navigation.replace('Home');
        } else if (key === 8) {
            navigation.navigate('Login');
        } else if (key === 9) {
            navigation.navigate('Notification');
        } else if (key === 10) {
            navigation.navigate('Offers');
        } else if (key === 11) {
            navigation.navigate('OnBoarding');
        } else if (key === 12) {
            navigation.navigate('OrderDetail');
        } else if (key === 13) {
            navigation.navigate('OrderHistory');
        } else if (key === 14) {
            navigation.navigate('OrderSuccess');
        } else if (key === 15) {
            navigation.navigate('OrderTracking');
        } else if (key === 16) {
            navigation.navigate('Payment');
        } else if (key === 17) {
            navigation.navigate('ProductsDetails');
        } else if (key === 18) {
            navigation.navigate('Register');
        } else if (key === 19) {
            navigation.navigate('Search');
        } else if (key === 20) {
            navigation.navigate('EditProfile');
        } else if (key === 21) {
            navigation.navigate('ShopPage');
        } else if (key === 22) {
            navigation.navigate('WhishList');
        }
    }
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={'Pages List'} imageOnPress={home} />
                <View style={[styles.checkOut, { backgroundColor: isDark ? colors.primary : appColors.gray }]}>
                    <Text style={[styles.checkOutTxt, { textAlign: textRtlStyle }]}>Checkout all pages and their varations over here. following are the list of all the pages.</Text>
                </View>
                {pagesList.map((item, key) =>
                    <MenuItem
                        text={item.name}
                        showSwitch={false}
                        style={styles.menu}
                        width={'100%'}
                        fill={appColors.primary}
                        onPress={() => goToScreen(key)}
                    />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}