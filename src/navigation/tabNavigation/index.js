import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, Offers, Category, Cart ,PageList,Account, AboutUs,NotFound} from "../../screens";
import { Icons } from "../../utils/icons";
import { Image } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import appColors from "../../theme/appColors";
import { TabComponents } from "../../otherComponents";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";
import { createStackNavigator } from "@react-navigation/stack";


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

export function HomeStackScreen() {
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false, 
            }}
        >
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="Category" component={Category} />
            <HomeStack.Screen name="Account" component={Account} />
            <HomeStack.Screen name="PageList" component={PageList} />
            <HomeStack.Screen name="NotFound" component={NotFound} />
            <HomeStack.Screen name="AboutUs" component={AboutUs} />

         
        </HomeStack.Navigator>
    );
}

export function TabNavigation() {

    const { colors } = useTheme()
    const {t}=useValues()

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBar={(props) => <TabComponents {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.text,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: t('tabBar.home'),
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
                    tabBarLabel: t('tabBar.category'),
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
                    tabBarLabel: t('tabBar.search'),
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
                    tabBarLabel: t('tabBar.offers'),
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
                    tabBarLabel: t('tabBar.cart'),
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

