import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, Offers, Category, Cart } from "../../screens";
import { Icons } from "../../utils/icons";
import { Image } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";
import { DrawerNavigation } from "../drawer/drawerNavigator";
import { TabComponents } from "../../otherComponents";
import { useTheme } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
    const { colors } = useTheme()
    return (
        <Tab.Navigator
            initialRouteName="Drawer"
            tabBar={(props) => <TabComponents {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.text,
            }}
        >
            <Tab.Screen
                name="DrawerNavigation"
                component={DrawerNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}> 
                            <Icons.home />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Category"
                component={Category}
                options={{
                    tabBarLabel: 'Category',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            <Icons.category color={focused ? appColors.white : appColors.white} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            <Icons.search color={focused ? appColors.white : appColors.white} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Offers"
                component={Offers}
                options={{
                    tabBarLabel: 'Offers',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            <Image source={images.offer} style={[styles.img, { tintColor: focused ? appColors.white : appColors.white },]} />
                        </View>),
                }}
            />

            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            <Icons.cart color={focused ? appColors.white : appColors.white} />
                        </View>

                    ),
                }}
            />
        </Tab.Navigator>
    );
}

