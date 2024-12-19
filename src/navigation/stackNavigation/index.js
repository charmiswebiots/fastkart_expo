import React from "react";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Splash, Login, Register, Notification, Offers, EditProfile, Search, ProductsDetails, OrderHistory, OrderSuccess, OrderTracking, Payment, WhishList, Cart, ShopPage, Address, SelectAddress, OnBoarding, OrderDetail, Account, PageList } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useValues } from "../../utils/context";

import appColors from "../../theme/appColors";
import { DrawerNavigation } from "../drawer/drawerNavigator";

const Stack = createNativeStackNavigator();

export function StackNavigation() {
  const { isDark } = useValues();
  const theme = isDark
    ? {
      ...DarkTheme,
      colors: {
        background: appColors.dark,
        text: appColors.white,
        primary: appColors.darkDrawer,
        card: appColors.dark,
      },
    }
    : {
      ...DefaultTheme,
      colors: {
        background: appColors.white,
        text: appColors.title,
        primary: appColors.drawer,
        card: appColors.white,
      }
    };
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} /> */}
        <Stack.Screen name="Home" component={DrawerNavigation} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
        <Stack.Screen name="OrderTracking" component={OrderTracking} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="whishList" component={WhishList} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ShopPage" component={ShopPage} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="SelectAddress" component={SelectAddress} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
        {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}


