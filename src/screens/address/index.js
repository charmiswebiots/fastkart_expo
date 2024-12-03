import React from "react";
import { View, SafeAreaView, Image, ScrollView, Text } from "react-native";
import styles from "./styles";
import { GlobalStyle } from "../../styles/style";
import appColors from "../../theme/appColors";
import { Icons } from "../../utils/icons";
import images from "../../utils/images";
import { Header, Button, Input } from "../../commonComponents";
import { location } from "../data";
import { windowHeight } from "../../theme/appConstant";

export function Address({ navigation }) {

    const payment = () => {
        navigation.navigate('Payment')
    }
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: appColors.white }]}>
            <View>
                <Header
                    onPress={() => navigation.goBack()}
                    image={<Icons.search />}
                    isText
                    titleText={'Add Address'} />
                <View>
                    <Image source={images.map} style={styles.mapImg} resizeMode='stretch' />
                </View>
            </View>

            <View style={[styles.truckView, { backgroundColor: appColors.white, flexDirection: 'row' }]}>
                <Icons.truck />
                <Text style={[styles.deliveryTime, { color: appColors.black }]}>Delivery on 7th Aug, Slot: 7am to 9am</Text>
            </View>
            <View style={styles.mapView}>
                <View style={[styles.map, { alignSelf: 'flex-start' }]}>
                    <Icons.map />
                </View>
                <View style={[styles.paymentView, { backgroundColor: appColors.white }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ alignItems: 'center', alignSelf: 'center', alignContent: 'center', justifyContent: 'center', right: windowHeight(38) }}>
                            <Input placeholder={'Search Location'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
                        </View>

                        <View style={[styles.locationView, { flexDirection: 'row' }]}>
                            <View style={styles.location}>
                                <Icons.currentLocation />
                            </View>
                            <Text style={[styles.locationTxt, { color: appColors.black }]}>Use current location</Text>
                        </View>
                        {location.slice(0, 2).map((item, index) => (
                            <View key={index} style={[styles.addView, index === 0 && { borderBottomWidth: 0.5, borderBottomColor: appColors.placeholder, paddingBottom: windowHeight(0) }]}>
                                <View style={[styles.nameView, { flexDirection: "row" }]}>
                                    <Icons.location />
                                    <Text style={[styles.name, { color: appColors.black }]}>
                                        {item.name}
                                    </Text>
                                </View>
                                <Text style={[styles.add, { textAlign: 'left' }]}>
                                    {item.address}
                                </Text>
                                {item.isWork && (
                                    <Text style={[styles.workTag, { color: appColors.gray }]}>
                                        Work Address
                                    </Text>
                                )}
                            </View>
                        ))}
                        <Button text={'Confirm location & proceed'} style={styles.btn}
                            color={appColors.white} onPress={payment} />
                    </ScrollView>
                </View>
                <View style={styles.map}>
                    <Icons.mapPin />
                </View>
            </View>
        </SafeAreaView>
    )
}