import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Account, AboutUs, NotFound, Offers, Search, Category, PageList, Home } from "../../screens";



const AppStack = createStackNavigator();
export function HomeStackScreen() {
    <AppStack.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: false,
        }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Account" component={Account} />
        <AppStack.Screen name="PagesList" component={PageList} />
        <AppStack.Screen name="AboutUs" component={AboutUs} />
        <AppStack.Screen name="NotFound" component={NotFound} />
        <AppStack.Screen name="Category" component={Category} />
        <AppStack.Screen name="Search" component={Search} />
        <AppStack.Screen name="Offers" component={Offers} />
    </AppStack.Navigator>
}