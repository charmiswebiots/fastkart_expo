// import React, { useContext } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { Home, Notification } from '../../screens';

// const Drawer = createDrawerNavigator();

// export function MyDrawer() {
//     return (
//         <NavigationContainer >
//             <Drawer.Navigator initialRouteName='Home'>
//                 <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
//                 <Drawer.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }







// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Home, Notification, Search } from "../../screens";
// import { windowWidth } from "../../theme/appConstant";
// import { Account } from "../../screens";

// const Drawer = createDrawerNavigator();

// export function DrawerNavigation() {
//     return (

//         <Drawer.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//             drawerStyle: {
//                 borderTopRightRadius: windowWidth(20),
//                 borderBottomRightRadius: windowWidth(20),
//                 width: windowWidth(370)
//             },
//             drawerPosition: 'left',
//             drawerType: 'back',
//             swipeEnabled: false
//         }}
//         useLegacyImplementation
//         drawerContent={() => <Account />}>
//             <Drawer.Screen 
//                 name="Home" 
//                 component={Home} 
//                 options={{ headerShown: false }} 
//             />
//             <Drawer.Screen name="Notification" component={Notification} />
//             <Drawer.Screen name="Search" component={Search} />
//         </Drawer.Navigator >
//     );
// }




// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Account, Home, Notification, EditProfile, WhishList, OrderHistory, Category, PageList } from "../../screens";
// import { windowWidth } from "../../theme/appConstant";
// import { DrawerComponent } from '../../otherComponents/index'
// import { HomeStackScreen } from "../homeStackNavigator/homeStackNavigator";
// import pagesList from '../../screens'

// const Drawer = createDrawerNavigator();

// export function DrawerNavigation() {
//     return (
//         <Drawer.Navigator
//             initialRouteName="Home"
//             screenOptions={{
//                 drawerStyle: {
//                     borderTopRightRadius: windowWidth(20),
//                     borderBottomRightRadius: windowWidth(20),
//                     width: windowWidth(370),
//                 },
//                 drawerPosition: 'left',
//                 drawerType: 'front',
//                 swipeEnabled: true,
//             }}

//             screenOptions={{ headerShown: false }}
//             drawerContent={() => <DrawerComponent />}
//         >
//             <Drawer.Screen
//                 name="Home"
//                 component={Home}
//             />
//             <Drawer.Screen name="Category" component={Category} />
//             <Drawer.Screen name="OrderHistory" component={OrderHistory} />
//             <Drawer.Screen name="WhishList" component={WhishList} />
//             <Drawer.Screen name="Account" component={Account} />
//             <Drawer.Screen name="Notification" component={Notification} />
//             <Drawer.Screen name="EditProfile" component={EditProfile} />
//             <Drawer.Screen name="PageList" component={PageList} />


//         </Drawer.Navigator>
//     );
// }






import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Account, Home, Notification, EditProfile, WhishList, OrderHistory, Category, PageList } from "../../screens";
import { windowWidth } from "../../theme/appConstant";
import { DrawerComponent } from '../../otherComponents/index';

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerStyle: {
                    borderTopRightRadius: windowWidth(20),
                    borderBottomRightRadius: windowWidth(20),
                    width: windowWidth(365),
                },
                drawerPosition: 'left',
                drawerType: 'front',
                swipeEnabled: true,
                headerShown: false,
            }}
            drawerContent={() => <DrawerComponent />}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Category" component={Category} />
            <Drawer.Screen name="OrderHistory" component={OrderHistory} />
            <Drawer.Screen name="WhishList" component={WhishList} />
            <Drawer.Screen name="Account" component={Account} />
            <Drawer.Screen name="Notification" component={Notification} />
            <Drawer.Screen name="EditProfile" component={EditProfile} />
            <Drawer.Screen name="PageList" component={PageList} />
        </Drawer.Navigator>
    );
}
