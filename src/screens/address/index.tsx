import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyle } from '../../styles/style';
import appColors from '../../theme/appColors';
import images from '../../utils/images';
import styles from './styles';
import { Icons } from '../../utils/icons';
import { Header, Button, Input } from '../../commonComponents';
import { location } from '../data';
import { windowHeight } from '../../theme/appConstant';
import { useValues } from '../../utils/context';
import { useLoadingContext } from '../../utils/context';

interface AddressProps {
  navigation: {
    navigate: (screen: string) => void;
    goBack: () => void;
  };
}

export function Address({ navigation }: AddressProps): JSX.Element {
  const { colors } = useTheme();
  const { viewRtlStyle, rtl, textRtlStyle, t, isDark } = useValues();
  const [loading, setLoading] = useState<boolean>(false);
  const { addressLoaded, setAddressLoaded } = useLoadingContext();

  useEffect(() => {
    if (addressLoaded) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAddressLoaded(true);
      }, 3000);
    }
  }, [addressLoaded, setAddressLoaded]);

  const payment = (): void => {
    navigation.navigate("Payment");
  };

  const address=():void=>{
    navigation.navigate('SelectAddress')
  }

  const SkeletonLoader = (): JSX.Element => (
    <ContentLoader
      speed={1}
      width={400}
      height={130}
      viewBox="0 0 400 110"
      backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
      foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
    >
       <Rect 
        x={rtl ? '90%' : 0} 
        y="10" 
        rx="4" 
        ry="4" 
        width="10%" 
        height="40" 
      />
      <Rect 
        x={rtl ? '15%' : '12%'}  
        y="10" 
        rx="4" 
        ry="4" 
        width="70%" 
        height="25" 
      />
      <Rect 
        x={rtl ? '0%' : 0} 
        y="65" 
        rx="4" 
        ry="4" 
        width="100%" 
        height="25" 
      />
    </ContentLoader>
  );

  const SkeletonImg = (): JSX.Element => (
    <ContentLoader
      speed={1}
      width={400}
      height={900}
      viewBox="0 0 400 900"
      backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
      foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
    >
      <Rect x="0" y="0" rx="4" ry="4" width="100%" height='900' />
    </ContentLoader>
  );

  return (
    <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
      <View>
        <Header
          onPress={() => navigation.goBack()}
          image={<Icons.search />}
          isText
          imageOnPress={address}
          titleText={t("addAddressPage.addAddress")}
        />
        <View>
          {loading ? (
            <View
              style={[
                styles.mapImg,
                { backgroundColor: appColors.loaderBackground },
              ]}
            >
              <SkeletonImg />
            </View>
          ) : (
            <Image
              source={images.map}
              style={styles.mapImg}
              resizeMode="stretch"
            />
          )}
        </View>
      </View>

      <View
        style={[
          styles.truckView,
          { backgroundColor: colors.background, flexDirection: viewRtlStyle },
        ]}
      >
        <Icons.truck />
        <Text style={[styles.deliveryTime, { color: colors.text }]}>
          {t("addAddressPage.deliverTime").substring(0, 60)}
        </Text>
      </View>

      <View style={styles.mapView}>
        <View
          style={[styles.map, { alignSelf: rtl ? "flex-end" : "flex-start" }]}
        >
          <Icons.map />
        </View>
        <View style={[styles.paymentView, { backgroundColor: colors.background }]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.inputView}>
              <Input
                placeholder={t("addAddressPage.searchLocation")}
                rightIcon={<Icons.voiceSearch />}
                leftIcon={<Icons.search />}
                style={styles.input}
              />
            </View>

            <View style={[styles.locationView, { flexDirection: viewRtlStyle }]}>
              <View style={styles.location}>
                <Icons.currentLocation />
              </View>
              <Text style={[styles.locationTxt, { color: colors.text }]}>
                {t("addAddressPage.useCurrentLocation")}
              </Text>
            </View>

            {loading
              ? location.slice(0, 2).map((_, index: number) => (
                  <SkeletonLoader key={`skeleton-${index}`} />
                ))
              : location.length > 0 &&
                location.slice(0, 2).map((item: { name: string; address: string }, index: number) => (
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
                    <View
                      style={[styles.nameView, { flexDirection: viewRtlStyle }]}
                    >
                      <Icons.location />
                      <Text style={[styles.name, { color: colors.text }]}>
                        {t(item.name)}
                      </Text>
                    </View>
                    <Text style={[styles.add, { textAlign: textRtlStyle }]}>
                      {t(item.address)}
                    </Text>
                  </View>
                ))}

            <Button
              text={t("addAddressPage.confirmLocation")}
              style={styles.btn}
              color={appColors.white}
              onPress={payment}
            />
          </ScrollView>
        </View>
        <View style={styles.map}>
          <Icons.mapPin />
        </View>
      </View>
    </SafeAreaView>
  );
}