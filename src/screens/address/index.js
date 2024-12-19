// import React, { useEffect, useState } from "react";
// import { View, SafeAreaView, Image, ScrollView, Text, Animated } from "react-native";
// import styles from "./styles";
// import { GlobalStyle } from "../../styles/style";
// import appColors from "../../theme/appColors";
// import { Icons } from "../../utils/icons";
// import images from "../../utils/images";
// import { Header, Button, Input } from "../../commonComponents";
// import { location } from "../data";
// import { windowHeight } from "../../theme/appConstant";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function Address({ navigation }) {

//     const [loading, setLoading] = useState(true);

//     const fadeAnim = new Animated.Value(1);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 500,
//                 useNativeDriver: true,
//             }).start();
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);


//     const { colors } = useTheme()
//     const { viewRtlStyle, rtl, textRtlStyle, t ,isDark} = useValues()

//     const payment = () => {
//         navigation.navigate('Payment')
//     }


//     const SkeletonLoader = () => (
//         <View>
//             <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                 <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                 <View style={{
//                     justifyContent: 'space-between',
//                     flexDirection: viewRtlStyle
//                 }}>
//                     <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
//                     <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
//                     <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
//                 </View>
//             </View>
//         </View>

//     );

//     return (
//         <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
//             <View>
//                 <Header
//                     onPress={() => navigation.goBack()}
//                     image={<Icons.search />}
//                     isText
//                     titleText={t('addAddressPage.addAddress')} />
//                 <View>
//                     <Image source={images.map} style={styles.mapImg} resizeMode='stretch' />
//                 </View>
//             </View>

//             <View style={[styles.truckView, { backgroundColor: colors.background, flexDirection: viewRtlStyle }]}>
//                 <Icons.truck />
//                 <Text style={[styles.deliveryTime, { color: colors.text }]}>{t('addAddressPage.deliverTime').substring(0, 60) + ""}</Text>
//             </View>
//             <View style={styles.mapView}>
//                 <View style={[styles.map, { alignSelf: rtl ? 'flex-end' : 'flex-start' }]}>
//                     <Icons.map />
//                 </View>
//                 <View style={[styles.paymentView, { backgroundColor: colors.background }]}>
//                     <ScrollView showsVerticalScrollIndicator={false}>
//                         <View style={styles.inputView}>
//                             <Input placeholder={t('addAddressPage.searchLocation')} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
//                         </View>

//                         <View style={[styles.locationView, { flexDirection: viewRtlStyle }]}>
//                             <View style={styles.location}>
//                                 <Icons.currentLocation />
//                             </View>
//                             <Text style={[styles.locationTxt, { color: colors.text }]}>{t('addAddressPage.useCurrentLocation')} </Text>
//                         </View>
//                         {location.slice(0, 2).map((item, index) => (
//                             <View
//                                 key={index}
//                                 style={[
//                                     styles.addView,
//                                     (index === 0 || index === 1) && {
//                                         borderBottomWidth: 0.5,
//                                         borderBottomColor: appColors.placeholder,
//                                         paddingBottom: windowHeight(15),
//                                     },
//                                 ]}
//                             >
//                                 <View style={[styles.nameView, { flexDirection: viewRtlStyle }]}>
//                                     <Icons.location />
//                                     <Text style={[styles.name, { color: colors.text }]}>
//                                         {t(item.name)}
//                                     </Text>
//                                 </View>
//                                 <Text style={[styles.add, { textAlign: textRtlStyle }]}>{t(item.address)}</Text>
//                             </View>
//                         ))}
//                         <Button text={t('addAddressPage.confirmLocation')} style={styles.btn}
//                             color={appColors.white} onPress={payment} />
//                     </ScrollView>
//                 </View>
//                 <View style={styles.map}>
//                     <Icons.mapPin />
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }




// import React, { useEffect, useState } from "react";
// import { View, SafeAreaView, Image, ScrollView, Text, Animated } from "react-native";
// import styles from "./styles";
// import { GlobalStyle } from "../../styles/style";
// import appColors from "../../theme/appColors";
// import { Icons } from "../../utils/icons";
// import images from "../../utils/images";
// import { Header, Button, Input } from "../../commonComponents";
// import { location } from "../data";
// import { windowHeight } from "../../theme/appConstant";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function Address({ navigation }) {

//     const [loading, setLoading] = useState(true);

//     const fadeAnim = new Animated.Value(1);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//             Animated.timing(fadeAnim, {
//                 toValue: 0,
//                 duration: 500,
//                 useNativeDriver: true,
//             }).start();
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);


//     const { colors } = useTheme()
//     const { viewRtlStyle, rtl, textRtlStyle, t ,isDark} = useValues()

//     const payment = () => {
//         navigation.navigate('Payment')
//     }

//     const SkeletonLoader = () => (
//         <View>
//             <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                 <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                 <View style={{
//                     justifyContent: 'space-between',
//                     flexDirection: viewRtlStyle
//                 }}>

//                     <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
//                 </View>
//             </View>
//         </View>
//     );

//     return (
//         <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
//             <View>
//                 <Header
//                     onPress={() => navigation.goBack()}
//                     image={<Icons.search />}
//                     isText
//                     titleText={t('addAddressPage.addAddress')} />
//                 <View>
//                     {loading ? (
//                         <View style={[styles.mapImg, { backgroundColor: appColors.loaderBackground }]} />
//                     ) : (
//                         <Image source={images.map} style={styles.mapImg} resizeMode='stretch' />
//                     )}
//                 </View>
//             </View>

//             <View style={[styles.truckView, { backgroundColor: colors.background, flexDirection: viewRtlStyle }]}>
//                 <Icons.truck />
//                 <Text style={[styles.deliveryTime, { color: colors.text }]}>{t('addAddressPage.deliverTime').substring(0, 60) + ""}</Text>
//             </View>
//             <View style={styles.mapView}>
//                 <View style={[styles.map, { alignSelf: rtl ? 'flex-end' : 'flex-start' }]}>
//                     <Icons.map />
//                 </View>
//                 <View style={[styles.paymentView, { backgroundColor: colors.background }]}>
//                     <ScrollView showsVerticalScrollIndicator={false}>
//                         <View style={styles.inputView}>
//                             <Input placeholder={t('addAddressPage.searchLocation')} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />} style={styles.input} />
//                         </View>

//                         <View style={[styles.locationView, { flexDirection: viewRtlStyle }]}>
//                             <View style={styles.location}>
//                                 <Icons.currentLocation />
//                             </View>
//                             <Text style={[styles.locationTxt, { color: colors.text }]}>{t('addAddressPage.useCurrentLocation')} </Text>
//                         </View>

//                             location.slice(0,2).map((item, index) => (

//                         {loading ? (
//                             <SkeletonLoader />
//                         ) : (
//                                 <View
//                                     key={index}
//                                     style={[
//                                         styles.addView,
//                                         (index === 0 || index === 1) && {
//                                             borderBottomWidth: 0.5,
//                                             borderBottomColor: appColors.placeholder,
//                                             paddingBottom: windowHeight(15),
//                                         },
//                                     ]}>
//                                     <View style={[styles.nameView, { flexDirection: viewRtlStyle }]}>
//                                         <Icons.location />
//                                         <Text style={[styles.name, { color: colors.text }]}>
//                                             {t(item.name)}
//                                         </Text>
//                                     </View>
//                                     <Text style={[styles.add, { textAlign: textRtlStyle }]}>{t(item.address)}</Text>
//                                 </View>
//                             ))
//                         )}

//                         <Button text={t('addAddressPage.confirmLocation')} style={styles.btn}
//                             color={appColors.white} onPress={payment} />
//                     </ScrollView>
//                 </View>
//                 <View style={styles.map}>
//                     <Icons.mapPin />
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }


// import React, { useEffect, useState } from "react";
// import { View, SafeAreaView, Image, ScrollView, Text, Animated } from "react-native";
// import styles from "./styles";
// import { GlobalStyle } from "../../styles/style";
// import appColors from "../../theme/appColors";
// import { Icons } from "../../utils/icons";
// import images from "../../utils/images";
// import { Header, Button, Input } from "../../commonComponents";
// import { location } from "../data";
// import { windowHeight } from "../../theme/appConstant";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../utils/context";

// export function Address({ navigation }) {
//     const [loading, setLoading] = useState(true);
//     const [fadeAnim] = useState(new Animated.Value(0));

//     useEffect(() => {

//         setTimeout(() => {
//             setLoading(false);
//         }, 3000)
//         Animated.loop(
//             Animated.sequence([
//                 Animated.timing(fadeAnim, {
//                     toValue: 1,
//                     duration: 1000,
//                     useNativeDriver: true,
//                 }),
//                 Animated.timing(fadeAnim, {
//                     toValue: 0,
//                     duration: 1000,
//                     useNativeDriver: true,
//                 }),
//             ])
//         ).start();
//     }, [fadeAnim]);

//     const { colors } = useTheme();
//     const { viewRtlStyle, rtl, textRtlStyle, t } = useValues();

//     const payment = () => {
//         navigation.navigate("Payment");
//     };

//     const SkeletonLoader = () => (
//         <View>
            // <View
            //     style={[
            //         styles.loaderContainer,
            //         { backgroundColor: appColors.interpolateBackground },
            //         { flexDirection: viewRtlStyle },
            //     ]}
            // >
            //     <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
            //     <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
            // </View>
//         </View>
//     );

//     return (
//         <SafeAreaView
//             style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}
//         >
//             <View>
//                 <Header
//                     onPress={() => navigation.goBack()}
//                     image={<Icons.search />}
//                     isText
//                     titleText={t("addAddressPage.addAddress")}
//                 />
//                 <View>
//                     {loading ? (
//                         <View
//                             style={[
//                                 styles.mapImg,
//                                 { backgroundColor: appColors.loaderBackground },
//                             ]}
//                         />
//                     ) : (
//                         <Image
//                             source={images.map}
//                             style={styles.mapImg}
//                             resizeMode="stretch"
//                         />
//                     )}
//                 </View>
//             </View>

//             <View
//                 style={[
//                     styles.truckView,
//                     { backgroundColor: colors.background, flexDirection: viewRtlStyle },
//                 ]}
//             >
//                 <Icons.truck />
//                 <Text style={[styles.deliveryTime, { color: colors.text }]}>
//                     {t("addAddressPage.deliverTime").substring(0, 60) + ""}
//                 </Text>
//             </View>
//             <View style={styles.mapView}>
//                 <View
//                     style={[
//                         styles.map,
//                         { alignSelf: rtl ? "flex-end" : "flex-start" },
//                     ]}
//                 >
//                     <Icons.map />
//                 </View>
//                 <View
//                     style={[
//                         styles.paymentView,
//                         { backgroundColor: colors.background },
//                     ]}
//                 >
//                     <ScrollView showsVerticalScrollIndicator={false}>
//                         <View style={styles.inputView}>
//                             <Input
//                                 placeholder={t("addAddressPage.searchLocation")}
//                                 rightIcon={<Icons.voiceSearch />}
//                                 leftIcon={<Icons.search />}
//                                 style={styles.input}
//                             />
//                         </View>

//                         <View
//                             style={[
//                                 styles.locationView,
//                                 { flexDirection: viewRtlStyle },
//                             ]}
//                         >
//                             <View style={styles.location}>
//                                 <Icons.currentLocation />
//                             </View>
//                             <Text
//                                 style={[styles.locationTxt, { color: colors.text }]}
//                             >
//                                 {t("addAddressPage.useCurrentLocation")}{" "}
//                             </Text>
//                         </View>

//                         {loading
//                             ? location.slice(0, 2).map((_, index) => (
//                                 <SkeletonLoader key={`skeleton-${index}`} />
//                             ))
//                             : location.length > 0 &&
//                             location.slice(0, 2).map((item, index) => (
//                                 <View
//                                     key={index}
//                                     style={[
//                                         styles.addView,
//                                         (index === 0 || index === 1) && {
//                                             borderBottomWidth: 0.5,
//                                             borderBottomColor:
//                                                 appColors.placeholder,
//                                             paddingBottom: windowHeight(15),
//                                         },
//                                     ]}
//                                 >
//                                     <View
//                                         style={[
//                                             styles.nameView,
//                                             { flexDirection: viewRtlStyle },
//                                         ]}
//                                     >
//                                         <Icons.location />
//                                         <Text
//                                             style={[
//                                                 styles.name,
//                                                 { color: colors.text },
//                                             ]}
//                                         >
//                                             {t(item.name)}
//                                         </Text>
//                                     </View>
//                                     <Text
//                                         style={[
//                                             styles.add,
//                                             { textAlign: textRtlStyle },
//                                         ]}
//                                     >
//                                         {t(item.address)}
//                                     </Text>
//                                 </View>
//                             ))}

//                         <Button
//                             text={t("addAddressPage.confirmLocation")}
//                             style={styles.btn}
//                             color={appColors.white}
//                             onPress={payment}
//                         />
//                     </ScrollView>
//                 </View>
//                 <View style={styles.map}>
//                     <Icons.mapPin />
//                 </View>
//             </View>
//         </SafeAreaView>
//     );
// }










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

export function Address({ navigation }) {

  const { colors } = useTheme();
  const { viewRtlStyle, rtl, textRtlStyle, t } = useValues();
  const [loading, setLoading] = useState(false);
  const { addressLoaded, setAddressLoaded } = useLoadingContext();

  useEffect(() => {
      if (!addressLoaded) {
          setLoading(true);
          console.log('loaijhng',loading)
          setTimeout(() => {
              setLoading(false);
              setAddressLoaded(true);

          }, 3000);
      }
  }, [addressLoaded, setAddressLoaded]);

  const payment = () => {
    navigation.navigate("Payment");
  };

  const SkeletonLoader = () => (
    <ContentLoader
      speed={1}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor={appColors.interpolateBackground}
      foregroundColor={appColors.placeholder}
    >

      
      <Rect x="0" y="10" rx="4" ry="4" width="10%" height="40"/>
      <Rect x="12%" y="10" rx="4" ry="4" width="70%"height="22"/>

      <Rect x="0" y="65" rx="4" ry="4" width="100%" height="25"/>
    </ContentLoader>
  );


  const SkeletonImg = () => (
    <ContentLoader
      speed={1}
      width={400}
      height={900}
      viewBox="0 0 400 900"
      backgroundColor={appColors.interpolateBackground}
      foregroundColor={appColors.placeholder}
    >

      
      <Rect x="0" y="0" rx="4" ry="4" width="100%" height='900'/>
     
    </ContentLoader>
  );
  return (
    <SafeAreaView style={[GlobalStyle.mainView, { backgroundColor: colors.background }]}>
      <View>
        <Header
          onPress={() => navigation.goBack()}
          image={<Icons.search />}
          isText
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
              ? location.slice(0, 2).map((_, index) => (
                  <SkeletonLoader key={`skeleton-${index}`} />
                ))
              : location.length > 0 &&
                location.slice(0, 2).map((item, index) => (
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