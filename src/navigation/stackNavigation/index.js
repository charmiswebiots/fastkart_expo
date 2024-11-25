import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash, Login, Register, Home, Notification, Offers, EditProfile, Search, ProductsDetails, NotFound, AboutUs, OrderHistory, OrderSuccess, OrderTracking, Payment, Category, WhishList, Cart, ShopPage } from "../../screens";
import { TabNavigation } from "../tabNavigation";

const Stack = createStackNavigator();

export function StackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/> */}
                {/* <Stack.Screen name="Drawer" component={Drawer} /> */}
                {/* <Stack.Screen name="Home" component={TabNavigation} />
                <Stack.Screen name="Notification" component={Notification}/>
                <Stack.Screen name="Offers" component={Offers}/>
                <Stack.Screen name="EditProfile" component={EditProfile}/>
                <Stack.Screen name="Search" component={Search}/>
                <Stack.Screen name="NotFound" component={NotFound}/>
                <Stack.Screen name="AboutUs" component={AboutUs}/>
                <Stack.Screen name="OrderHistory" component={OrderHistory}/>
                <Stack.Screen name="OrderSuccess" component={OrderSuccess}/>
                <Stack.Screen name="OrderTracking" component={OrderTracking}/>
                <Stack.Screen name="Payment" component={Payment}/>
                <Stack.Screen name="Category" component={Category} /> */}
                {/* <Stack.Screen name="whishList" component={WhishList} /> */}
                {/* <Stack.Screen name="Cart" component={Cart} /> */}
                <Stack.Screen name="ShopPage" component={ShopPage} />
                {/* <Stack.Screen name="ProductsDetails" component={ProductsDetails} /> */}
            </Stack.Navigator>

        </NavigationContainer>
    )
}