import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Splash, Login, Register, Home, Notification, Offers, EditProfile, Search, ProductsDetails, NotFound, AboutUs, OrderHistory, OrderSuccess, OrderTracking, Payment, Category, WhishList, Cart, ShopPage, Address, SelectAddress, OnBoarding, OrderDetail, Account } from "../../screens";
import { TabNavigation } from "../tabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MyDrawer } from "../drawer/drawerNavigator";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} /> */}
                <Stack.Screen name="Home" component={TabNavigation} />
                {/* <Stack.Screen name="Notification" component={Notification} /> */}
                {/* <Stack.Screen name="Offers" component={Offers} /> */}
                <Stack.Screen name="Drawer" component={MyDrawer} />
                {/* <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="NotFound" component={NotFound} />
                <Stack.Screen name="AboutUs" component={AboutUs} />
                <Stack.Screen name="OrderHistory" component={OrderHistory} />
                <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
                <Stack.Screen name="OrderTracking" component={OrderTracking} />
                <Stack.Screen name="Payment" component={Payment} /> */}
                {/* <Stack.Screen name="Category" component={Category} />
                <Stack.Screen name="whishList" component={WhishList} />
                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="ShopPage" component={ShopPage} />
                <Stack.Screen name="Address" component={Address} />
                <Stack.Screen name="SelectAddress" component={SelectAddress} />
                <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
                {/* <Stack.Screen name="OrderDetail" component={OrderDetail} /> */}
                {/* <Stack.Screen name="ProductsDetails" component={ProductsDetails} /> */}
                {/* <Stack.Screen name="Account" component={Account} /> */}
                {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}


