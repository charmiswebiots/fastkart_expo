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
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../utils/context";

export function Address({ navigation }) {
    const { colors } = useTheme()
    const {viewRtlStyle,rtl,textRtlStyle}=useValues()

    const payment = () => {
        navigation.navigate('Payment')
    }
    return (
        <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
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

            <View style={[styles.truckView, { backgroundColor: colors.background, flexDirection: viewRtlStyle}]}>
                <Icons.truck />
                <Text style={[styles.deliveryTime, { color: colors.text }]}>Delivery on 7th Aug, Slot: 7am to 9am</Text>
            </View>
            <View style={styles.mapView}>
                <View style={[styles.map, { alignSelf:rtl?'flex-end': 'flex-start' }]}>
                    <Icons.map />
                </View>
                <View style={[styles.paymentView, { backgroundColor: colors.background }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.inputView}>
                            <Input placeholder={'Search Location'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
                        </View>

                        <View style={[styles.locationView, { flexDirection: viewRtlStyle }]}>
                            <View style={styles.location}>
                                <Icons.currentLocation />
                            </View>
                            <Text style={[styles.locationTxt, { color: colors.text }]}>Use current location</Text>
                        </View>
                        {location.slice(0, 2).map((item, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.addView,
                                    (index === 0 || index === 1) && {
                                        borderBottomWidth: 0.5,
                                        borderBottomColor: appColors.placeholder,
                                        paddingBottom: windowHeight(15),
                                    },
                                ]}
                            >
                                <View style={[styles.nameView, { flexDirection:viewRtlStyle}]}>
                                    <Icons.location />
                                    <Text style={[styles.name, { color: colors.text }]}>
                                        {item.name}
                                    </Text>
                                </View>
                                <Text style={[styles.add, { textAlign: textRtlStyle }]}>{item.address}</Text>
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