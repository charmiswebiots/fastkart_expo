import React from "react";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { Splash, Login, Register, Notification, Offers, EditProfile, Search, ProductsDetails, OrderHistory, OrderSuccess, OrderTracking, Payment, WhishList, Cart, ShopPage, Address, SelectAddress, OnBoarding, OrderDetail, Account, PageList } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useValues } from "../../utils/context";

import appColors from "../../theme/appColors";
import { DrawerNavigation } from "../drawer/drawerNavigator";

const RootStack = createNativeStackNavigator();

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
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Splash" component={Splash} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Home" component={DrawerNavigation} />
        <RootStack.Screen name="Notification" component={Notification} />
        <RootStack.Screen name="Offers" component={Offers} />
        <RootStack.Screen name="Search" component={Search} />
        <RootStack.Screen name="OrderHistory" component={OrderHistory} />
        <RootStack.Screen name="OrderSuccess" component={OrderSuccess} />
        <RootStack.Screen name="OrderTracking" component={OrderTracking} />
        <RootStack.Screen name="Payment" component={Payment} />
        <RootStack.Screen name="whishList" component={WhishList} />
        <RootStack.Screen name="Cart" component={Cart} />
        <RootStack.Screen name="ShopPage" component={ShopPage} />
        <RootStack.Screen name="Address" component={Address} />
        <RootStack.Screen name="SelectAddress" component={SelectAddress} />
        <RootStack.Screen name="OnBoarding" component={OnBoarding} />
        <RootStack.Screen name="OrderDetail" component={OrderDetail} />
        <RootStack.Screen name="ProductsDetails" component={ProductsDetails} />
        <RootStack.Screen name="EditProfile" component={EditProfile} />

      </RootStack.Navigator>
    </NavigationContainer>
  )
}


