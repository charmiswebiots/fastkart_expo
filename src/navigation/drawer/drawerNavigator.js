import React, { useContext } from 'react';
import Tab from './tabStackNavigator';
import { ProductsList, ProductsDetails, CartList, AddAddress, SelectAddress, SelectPayment, OrderSuccess, OrderTracking, OrderDetails, NotFound } from "../screens";
import { windowWidth } from '../theme/appConstant';
import { DrawerComponent } from '../../otherComponents';

const Drawer = createDrawerNavigator();

export default MyDrawer = () => {

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    borderTopRightRadius: windowWidth(20),
                    borderBottomRightRadius: windowWidth(20),
                    width: windowWidth(370)
                },
                drawerPosition: commonContext.isRTL ? 'right' : 'left',
                drawerType: 'back',
                swipeEnabled: false
            }}
            useLegacyImplementation
            drawerContent={(props) => <DrawerComponent {...props} />}>
            <Drawer.Screen name="Tab" component={Tab} options={{ headerShown: false }} />
            <Drawer.Screen name="ProductsList" component={ProductsList} options={{ headerShown: false }} />
            <Drawer.Screen name="ProductsDetails" component={ProductsDetails} options={{ headerShown: false }} />
            <Drawer.Screen name="CartList" component={CartList} options={{ headerShown: false }} />
            <Drawer.Screen name="AddAddress" component={AddAddress} options={{ headerShown: false }} />
            <Drawer.Screen name="SelectAddress" component={SelectAddress} options={{ headerShown: false }} />
            <Drawer.Screen name="SelectPayment" component={SelectPayment} options={{ headerShown: false }} />
            <Drawer.Screen name="OrderSuccess" component={OrderSuccess} options={{ headerShown: false }} />
            <Drawer.Screen name="OrderTracking" component={OrderTracking} options={{ headerShown: false }} />
            <Drawer.Screen name="OrderDetails" component={OrderDetails} options={{ headerShown: false }} />
            <Drawer.Screen name="NotFound" component={NotFound} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}