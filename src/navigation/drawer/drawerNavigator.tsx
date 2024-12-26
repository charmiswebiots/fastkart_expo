import React, { FC } from "react";
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Notification, WhishList, OrderHistory, AboutUs } from "../../screens";
import { windowWidth } from "../../theme/appConstant";
import { DrawerComponent } from '../../otherComponents/index';
import { useValues } from "../../utils/context";
import { TabNavigation } from "../tabNavigation";

const Drawer = createDrawerNavigator();

export const DrawerNavigation: FC = () => {
    const { rtl }: { rtl: boolean } = useValues();

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
                drawerType: 'back',
                swipeEnabled: false,
                headerShown: false,
            }}
            drawerContent={(props: DrawerContentComponentProps) => <DrawerComponent {...props} />}>
            <Drawer.Screen name="Home" component={TabNavigation} />
            <Drawer.Screen name="OrderHistory" component={OrderHistory} />
            <Drawer.Screen name="WhishList" component={WhishList} />
            <Drawer.Screen name="Notification" component={Notification} />
            <Drawer.Screen name="AboutUs" component={AboutUs} />
        </Drawer.Navigator>
    );
}