import React, { useContext } from 'react';
import {
    createDrawerNavigator,
} from '@react-navigation/drawer';
import Tab from './tabStackNavigator';
import { ProductsList, ProductsDetails, CartList, AddAddress, SelectAddress, SelectPayment, OrderSuccess, OrderTracking, OrderDetails, NotFound } from "../screens";
import { windowWidth } from '../theme/appConstant';
import DrawerContent from '../otherComponents/drawerComponents'
import { CommonContext } from '../../App';

const Drawer = createDrawerNavigator();

export default MyDrawer = () => {

    const commonContext = useContext(CommonContext);
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
            drawerContent={(props) => <DrawerContent {...props} />}>
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