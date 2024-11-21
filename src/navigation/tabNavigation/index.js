import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./styles";
import { Home,Offers } from "../../screens";
import { windowHeight,windowWidth } from "../../theme/appConstant";
import { Icons } from "../../utils/icons";
import images from "../../utils/images";
import { Text,View } from "react-native";
import search from "../../screens/dashBoard/search";


const Tab = createBottomTabNavigator();

const tabScreens = [
    {
        name: 'Home',
        component: Home,
        icon: Icons.BottomHome,
        label: 'Home',
    },
    {
        name: 'Offers',
        component: Offers,
        icon: Icons.BottomCategory,
        label: 'Offers',
    },
    {
        name: 'Search',
        component: search,
        icon: Icons.BottomSearch,
        label: 'Search',
    },
    // {
    //     name: 'Cart',
    //     component: Search,
    //     icon: Icons.BottomCart,
    //     label: 'Cart',
    // },

];

export function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: [
                    styles.tabBar,
                ],
            }}
        >
            {tabScreens.map((tab, index) => (
                <Tab.Screen
                    key={tab.name}
                    name={tab.name}
                    component={tab.component}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection:'row',
                                }}
                            >
                           
                                <tab.icon
                                    height={windowHeight(6)}
                                    width={windowWidth(6)}
                                  
                                />
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text
                                style={[
                                    styles.text,
                                    
                                ]}
                            >
                                {tab.label}
                            </Text>
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    )
}