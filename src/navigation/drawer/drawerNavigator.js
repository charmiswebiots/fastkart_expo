import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Account, Home, Notification, WhishList, OrderHistory, Category, PageList } from "../../screens";
import { windowWidth } from "../../theme/appConstant";
import { DrawerComponent } from '../../otherComponents/index';
import { useValues } from "../../utils/context";

const Drawer = createDrawerNavigator();

export function DrawerNavigation() {
    const {rtl}=useValues()

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerStyle: {
                    borderTopRightRadius: windowWidth(20),
                    borderBottomRightRadius: windowWidth(20),
                    width: windowWidth(365),
                },
                drawerPosition: rtl ? 'right' : 'left',
                drawerType: 'front',
                swipeEnabled: true,
                headerShown: false,
            }}
            drawerContent={() => <DrawerComponent />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Category" component={Category} />
            <Drawer.Screen name="OrderHistory" component={OrderHistory} />
            <Drawer.Screen name="WhishList" component={WhishList} />
            <Drawer.Screen name="Account" component={Account} />
            <Drawer.Screen name="Notification" component={Notification} />
            {/* <Drawer.Screen name="EditProfile" component={EditProfile} /> */}
            <Drawer.Screen name="PageList" component={PageList} />
        </Drawer.Navigator>
    );
}
