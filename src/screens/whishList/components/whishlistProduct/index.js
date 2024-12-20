// import React, { useEffect, useState } from "react";
// import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
// import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
// import { Counter } from "../../../../commonComponents";
// import styles from "./styles";
// import { cart } from "../../../data";
// import { Icons } from "../../../../utils/icons";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../../../utils/context";
// import appColors from "../../../../theme/appColors";

// export function WhishListProduct() {
    
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

//     const { colors } = useTheme()
//     const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues()
//     const [cartItems, setCartItems] = useState(cart);
//     const handleDelete = (id) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };

//     const renderRightActions = (progress, dragX, id) => {
//         const scale = dragX.interpolate({
//             inputRange: [-100, 0],
//             outputRange: [1, 0],
//             extrapolate: "clamp",
//         });

//         return (
//             <TouchableOpacity
//                 onPress={() => handleDelete(id)}
//                 style={styles.deleteButton}
//             >
//                 <Animated.View style={{ transform: [{ scale }] }}>
//                     <Icons.Delete />
//                 </Animated.View>
//             </TouchableOpacity>
//         );
//     };

//     return (
//         <GestureHandlerRootView style={styles.container}>
                               

//             {cartItems.map((item) => (
//                  <SkeletonLoader/>
//                 <Swipeable
//                     key={item.id}
//                     renderRightActions={(progress, dragX) =>
//                         renderRightActions(progress, dragX, item.id)
//                     }
//                     friction={2}
//                     leftThreshold={80}
//                     rightThreshold={100}
//                 >
//                     <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                         <Image source={item.image} style={styles.image} resizeMode="contain" />
//                         <View style={styles.lineView} />
//                         <View style={styles.counterView}>
//                             <TouchableOpacity activeOpacity={0.7}>
//                                 <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
//                                 <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
//                             </TouchableOpacity>
//                             <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
//                                 <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
//                                     <Text style={[styles.price, { color: colors.text }]}>
//                                         {currSymbol}{(item.price * currValue).toFixed(2)}
//                                     </Text>
//                                     <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
//                                         <Text style={styles.discount}>{item.discount}% </Text>
//                                         <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
//                                     </View>
//                                     <View style={styles.counter}>
//                                         <Counter />
//                                     </View>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 </Swipeable>
//             ))}
//         </GestureHandlerRootView>
//     );
// }



// import React, { useEffect, useState } from "react";
// import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
// import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
// import { Counter } from "../../../../commonComponents";
// import styles from "./styles";
// import { cart } from "../../../data";
// import { Icons } from "../../../../utils/icons";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../../../utils/context";
// import appColors from "../../../../theme/appColors";

// export function WhishListProduct() {
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

//     const SkeletonLoader = () => (
//         <View>
//             <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                 <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                 <View style={{ justifyContent: 'space-between', flexDirection: viewRtlStyle }}>
//                     <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
//                     <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
//                     <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
//                 </View>
//             </View>
//         </View>
//     );

//     const { colors } = useTheme();
//     const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
//     const [cartItems, setCartItems] = useState(cart);

//     const handleDelete = (id) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };

//     const renderRightActions = (progress, dragX, id) => {
//         const scale = dragX.interpolate({
//             inputRange: [-100, 0],
//             outputRange: [1, 0],
//             extrapolate: "clamp",
//         });

//         return (
//             <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
//                 <Animated.View style={{ transform: [{ scale }] }}>
//                     <Icons.Delete />
//                 </Animated.View>
//             </TouchableOpacity>
//         );
//     };

//     return (
//         <GestureHandlerRootView style={styles.container}>
//             {loading ? (
//                 <SkeletonLoader />
//             ) : (
//                 cartItems.map((item) => (
//                     <Swipeable
//                         key={item.id}
//                         renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
//                         friction={2}
//                         leftThreshold={80}
//                         rightThreshold={100}
//                     >
//                         <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                             <Image source={item.image} style={styles.image} resizeMode="contain" />
//                             <View style={styles.lineView} />
//                             <View style={styles.counterView}>
//                                 <TouchableOpacity activeOpacity={0.7}>
//                                     <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
//                                     <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
//                                 </TouchableOpacity>
//                                 <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
//                                     <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
//                                         <Text style={[styles.price, { color: colors.text }]}>
//                                             {currSymbol}{(item.price * currValue).toFixed(2)}
//                                         </Text>
//                                         <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
//                                             <Text style={styles.discount}>{item.discount}% </Text>
//                                             <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
//                                         </View>
//                                         <View style={styles.counter}>
//                                             <Counter />
//                                         </View>
//                                     </View>
//                                 </View>
//                             </View>
//                         </View>
//                     </Swipeable>
//                 ))
//             )}
//         </GestureHandlerRootView>
//     );
// }





// import React, { useEffect, useState } from "react";
// import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
// import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
// import { Counter } from "../../../../commonComponents";
// import styles from "./styles";
// import { cart } from "../../../data";
// import { Icons } from "../../../../utils/icons";
// import { useTheme } from "@react-navigation/native";
// import { useValues } from "../../../../utils/context";
// import appColors from "../../../../theme/appColors";

// export function WhishListProduct() {
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

//     const SkeletonLoader = () => (
//         <View>
//             <View style={[styles.loaderContainer, { backgroundColor: isDark ? colors.card : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                 <Animated.View style={[styles.skeletonImage, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//                 <View style={{ justifyContent: 'space-between', flexDirection: viewRtlStyle }}>
//                     <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
//                     <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
//                     <Animated.View style={[styles.skeletonText4, { opacity: fadeAnim }]} />
//                 </View>
//             </View>
//         </View>
//     );

//     const { colors } = useTheme();
//     const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
//     const [cartItems, setCartItems] = useState(cart);

//     const limitedCartItems = cartItems.slice(0,4);

//     const handleDelete = (id) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };

//     const renderRightActions = (progress, dragX, id) => {
//         const scale = dragX.interpolate({
//             inputRange: [-100, 0],
//             outputRange: [1, 0],
//             extrapolate: "clamp",
//         });

//         return (
//             <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
//                 <Animated.View style={{ transform: [{ scale }] }}>
//                     <Icons.Delete />
//                 </Animated.View>
//             </TouchableOpacity>
//         );
//     };

//     return (
//         <GestureHandlerRootView style={styles.container}>
//             {loading ? (
//                 <SkeletonLoader />
//             ) : (
//                 limitedCartItems.map((item) => (
//                     <Swipeable
//                         key={item.id}
//                         renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
//                         friction={2}
//                         leftThreshold={80}
//                         rightThreshold={100}
//                     >
//                         <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                             <Image source={item.image} style={styles.image} resizeMode="contain" />
//                             <View style={styles.lineView} />
//                             <View style={styles.counterView}>
//                                 <TouchableOpacity activeOpacity={0.7}>
//                                     <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
//                                     <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
//                                 </TouchableOpacity>
//                                 <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
//                                     <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
//                                         <Text style={[styles.price, { color: colors.text }]}>
//                                             {currSymbol}{(item.price * currValue).toFixed(2)}
//                                         </Text>
//                                         <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
//                                             <Text style={styles.discount}>{item.discount}% </Text>
//                                             <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
//                                         </View>
//                                         <View style={styles.counter}>
//                                             <Counter />
//                                         </View>
//                                     </View>
//                                 </View>
//                             </View>
//                         </View>
//                     </Swipeable>
//                 ))
//             )}
//         </GestureHandlerRootView>
//     );
// }




// import React, { useEffect, useState } from "react";
// import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
// import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
// import { Counter } from "../../../../commonComponents";
// import styles from "./styles";
// import { cart } from "../../../data";
// import { Icons } from "../../../../utils/icons";
// import { useTheme } from "@react-navigation/native";
// import { useLoadingContext, useValues } from "../../../../utils/context";
// import appColors from "../../../../theme/appColors";
// import ContentLoader, { Rect } from "react-content-loader/native";

// export function WhishListProduct() {
//     const [loading, setLoading] = useState(false);
//     const { addressLoaded, setAddressLoaded } = useLoadingContext();

//     useEffect(() => {
//         if (!addressLoaded) {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//                 setAddressLoaded(true);
//             }, 3000);
//         }
//     }, [addressLoaded, setAddressLoaded]);

//     const SkeletonLoader = () => (
//         <ContentLoader
//             speed={1}
//             width="100%"
//             height={110}
//             viewBox="0 0 340 80"

//             backgroundColor={isDark ? colors.card : appColors.loaderBackground}
//             foregroundColor={appColors.placeholder}
//         >
//             <Rect x="18" y="10" rx="10" ry="10" width="60" height="60" />
//             <Rect x="90" y="12" rx="5" ry="5" width="180" height="13" />
//             <Rect x="90" y="32" rx="5" ry="5" width="100" height="12" />
//             <Rect x="90" y="58" rx="5" ry="5" width="60" height="12" />
//             <Rect x="160" y="58" rx="5" ry="5" width="50" height="12" />
//             <Rect x="245" y="50" rx="5" ry="5" width="75" height="22" />
//         </ContentLoader>
//     );

//     const { colors } = useTheme();
//     const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
//     const [cartItems, setCartItems] = useState(cart);

//     const limitedCartItems = cartItems.slice(0, 4);

//     const handleDelete = (id) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };

//     const renderRightActions = (progress, dragX, id) => {
//         const scale = dragX.interpolate({
//             inputRange: [-100, 0],
//             outputRange: [1, 0],
//             extrapolate: "clamp",
//         });

//         return (
//             <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
//                 <Animated.View style={{ transform: [{ scale }] }}>
//                     <Icons.Delete />
//                 </Animated.View>
//             </TouchableOpacity>
//         );
//     };

//     return (
//         <GestureHandlerRootView style={styles.container}>
//             {loading ? (
//                 <SkeletonLoader />
//             ) : (
//                 limitedCartItems.map((item) => (
//                     <Swipeable
//                         key={item.id}
//                         renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
//                         friction={2}
//                         leftThreshold={80}
//                         rightThreshold={100}
//                     >
//                         <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                             <Image source={item.image} style={styles.image} resizeMode="contain" />
//                             <View style={styles.lineView} />
//                             <View style={styles.counterView}>
//                                 <TouchableOpacity activeOpacity={0.7}>
//                                     <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
//                                     <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
//                                 </TouchableOpacity>
//                                 <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
//                                     <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
//                                         <Text style={[styles.price, { color: colors.text }]}>
//                                             {currSymbol}{(item.price * currValue).toFixed(2)}
//                                         </Text>
//                                         <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
//                                             <Text style={styles.discount}>{item.discount}% </Text>
//                                             <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
//                                         </View>
//                                         <View style={styles.counter}>
//                                             <Counter />
//                                         </View>
//                                     </View>
//                                 </View>
//                             </View>
//                         </View>
//                     </Swipeable>
//                 ))
//             )}
//         </GestureHandlerRootView>
//     );
// }



// import React, { useEffect, useState } from "react";
// import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
// import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
// import { Counter } from "../../../../commonComponents";
// import styles from "./styles";
// import { cart } from "../../../data";
// import { Icons } from "../../../../utils/icons";
// import { useTheme } from "@react-navigation/native";
// import { useLoadingContext, useValues } from "../../../../utils/context";
// import appColors from "../../../../theme/appColors";
// import ContentLoader, { Rect } from "react-content-loader/native";

// // Skeleton Loader Component
// const SkeletonLoader = ({ isDark, colors }) => (
//     <ContentLoader
//         speed={1}
//         width="100%"
//         height={110}
//         viewBox="0 0 340 80"
//         backgroundColor={isDark ? colors.card : appColors.loaderBackground}
//         foregroundColor={appColors.placeholder}
//     >
//         <Rect x="18" y="10" rx="10" ry="10" width="60" height="60" />
//         <Rect x="90" y="12" rx="5" ry="5" width="180" height="13" />
//         <Rect x="90" y="32" rx="5" ry="5" width="100" height="12" />
//         <Rect x="90" y="58" rx="5" ry="5" width="60" height="12" />
//         <Rect x="160" y="58" rx="5" ry="5" width="50" height="12" />
//         <Rect x="245" y="50" rx="5" ry="5" width="75" height="22" />
//     </ContentLoader>
// );

// export function WhishListProduct() {
//     const [loading, setLoading] = useState(false);
//     const { addressLoaded, setAddressLoaded } = useLoadingContext();
//     const { colors } = useTheme();
//     const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
//     const [cartItems, setCartItems] = useState(cart);

//     useEffect(() => {
//         if (!addressLoaded) {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//                 setAddressLoaded(true);
//             }, 90000);
//         }
//     }, [addressLoaded, setAddressLoaded]);

//     const limitedCartItems = cartItems.slice(0, 4);

//     const handleDelete = (id) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };

//     const renderRightActions = (progress, dragX, id) => {
//         const scale = dragX.interpolate({
//             inputRange: [-100, 0],
//             outputRange: [1, 0],
//             extrapolate: "clamp",
//         });

//         return (
//             <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
//                 <Animated.View style={{ transform: [{ scale }] }}>
//                     <Icons.Delete />
//                 </Animated.View>
//             </TouchableOpacity>
//         );
//     };

//     return (
//         <GestureHandlerRootView style={styles.container}>
//             {loading ? (
//                 <SkeletonLoader isDark={isDark} colors={colors} />
//             ) : (
//                 limitedCartItems.map((item) => (
//                     <Swipeable
//                         key={item.id}
//                         renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
//                         friction={2}
//                         leftThreshold={80}
//                         rightThreshold={100}
//                     >
//                         <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
//                             <Image source={item.image} style={styles.image} resizeMode="contain" />
//                             <View style={styles.lineView} />
//                             <View style={styles.counterView}>
//                                 <TouchableOpacity activeOpacity={0.7}>
//                                     <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
//                                     <Text style={[styles.weight, { textAlign: textRtlStyle }]}>
//                                         {t(item.weight)}
//                                     </Text>
//                                 </TouchableOpacity>
//                                 <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
//                                     <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
//                                         <Text style={[styles.price, { color: colors.text }]}>
//                                             {currSymbol}{(item.price * currValue).toFixed(2)}
//                                         </Text>
//                                         <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
//                                             <Text style={styles.discount}>{item.discount}% </Text>
//                                             <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
//                                         </View>
//                                         <View style={styles.counter}>
//                                             <Counter />
//                                         </View>
//                                     </View>
//                                 </View>
//                             </View>
//                         </View>
//                     </Swipeable>
//                 ))
//             )}
//         </GestureHandlerRootView>
//     );
// }







import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity, Text, Animated } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import { Counter } from "../../../../commonComponents";
import styles from "./styles";
import { cart } from "../../../data";
import { Icons } from "../../../../utils/icons";
import { useTheme } from "@react-navigation/native";
import { useLoadingContext, useValues } from "../../../../utils/context";
import appColors from "../../../../theme/appColors";
import ContentLoader, { Rect } from "react-content-loader/native";
import { windowHeight } from "../../../../theme/appConstant";

const SkeletonLoader = ({ isDark, colors }) => (
    <ContentLoader
        speed={1}
        width="100%"
        height={440} 
        viewBox="0 0 340 440"
        backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
        foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
    >
        {[...Array(4)].map((_, index) => (
            <React.Fragment key={index}>
                <Rect x="18" y={index * 110 + 10} rx="10" ry="10" width="60" height="60" />
                <Rect x="90" y={index * 110 + 12} rx="5" ry="5" width="180" height="13" />
                <Rect x="90" y={index * 110 + 32} rx="5" ry="5" width="100" height="12" />
                <Rect x="90" y={index * 110 + 58} rx="5" ry="5" width="60" height="12" />
                <Rect x="160" y={index * 110 + 58} rx="5" ry="5" width="50" height="12" />
                <Rect x="245" y={index * 110 + 50} rx="5" ry="5" width="75" height="22" />
            </React.Fragment>
        ))}
    </ContentLoader>
);

// export function WhishListProduct() {
    // const [loading, setLoading] = useState(false);
    // const { addressLoaded, setAddressLoaded } = useLoadingContext();
    // const { colors } = useTheme();
    // const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
    // const [cartItems, setCartItems] = useState(cart);

    // useEffect(() => {
    //     if (addressLoaded) {
    //         setLoading(true);
    //         setTimeout(() => {
    //             setLoading(false);
    //             setAddressLoaded(true);
    //         }, 3000);
    //     }
    // }, [addressLoaded, setAddressLoaded]);

    // const limitedCartItems = cartItems.slice(0, 4);

//     const handleDelete = (id) => {
//         setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//     };

//     const renderRightActions = (progress, dragX, id) => {
//         const scale = dragX.interpolate({
//             inputRange: [-100, 0],
//             outputRange: [1.5, 0],
//             extrapolate: "clamp",
//         });

//         return (
//             <View style={{marginHorizontal:windowHeight(-22),left:windowHeight(25)}}>
//             <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
//                 <Animated.View style={{ transform: [{ scale }] ,left:windowHeight(7)}}>
//                     <Icons.Delete />
//                 </Animated.View>
//             </TouchableOpacity>
//             </View>
//         );
//     };

//     return (
        // <GestureHandlerRootView style={styles.container}>
        //     {loading ? (
        //         <SkeletonLoader isDark={isDark} colors={colors} />
        //     ) : (
        //         limitedCartItems.map((item) => (
        //             <Swipeable
        //                 key={item.id}
        //                 renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
        //                 friction={2}
        //                 leftThreshold={80}
        //                 rightThreshold={100}
        //             >
        //                 <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
        //                     <Image source={item.image} style={styles.image} resizeMode="contain" />
        //                     <View style={styles.lineView} />
        //                     <View style={styles.counterView}>
        //                         <TouchableOpacity activeOpacity={0.7}>
        //                             <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
        //                             <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
        //                         </TouchableOpacity>
        //                         <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
        //                             <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
        //                                 <Text style={[styles.price, { color: colors.text }]}>{currSymbol}{(item.price * currValue).toFixed(2)}</Text>
        //                                 <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
        //                                     <Text style={styles.discount}>{item.discount}% </Text>
        //                                     <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
        //                                 </View>
        //                                 <View style={styles.counter}>
        //                                     <Counter />
        //                                 </View>
        //                             </View>
        //                         </View>
        //                     </View>
        //                 </View>
        //             </Swipeable>
        //         ))
        //     )}
        // </GestureHandlerRootView>
//     );
// }



export function WhishListProduct({ onItemDelete }) {

    const [loading, setLoading] = useState(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();
    const { colors } = useTheme();
    const { isDark, viewRtlStyle, textRtlStyle, t, currSymbol, currValue } = useValues();
    const [cartItems, setCartItems] = useState(cart);

    useEffect(() => {
        if (addressLoaded) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);
            }, 3000);
        }
    }, [addressLoaded, setAddressLoaded]);

    const limitedCartItems = cartItems.slice(0, 4);


    const handleDelete = (id) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== id);
            onItemDelete(updatedItems.length);
            return updatedItems;
        });
    };

    const renderRightActions = (progress, dragX, id) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1.5, 0],
            extrapolate: "clamp",
        });

        return (
            <View style={{ marginHorizontal: windowHeight(-22), left: windowHeight(25) }}>
                <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
                    <Animated.View style={{ transform: [{ scale }], left: windowHeight(7) }}>
                        <Icons.Delete />
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            {loading ? (
                <SkeletonLoader isDark={isDark} colors={colors} />
            ) : (
                limitedCartItems.map((item) => (
                    <Swipeable
                        key={item.id}
                        renderRightActions={(progress, dragX) => renderRightActions(progress, dragX, item.id)}
                        friction={2}
                        leftThreshold={80}
                        rightThreshold={100}
                    >
                        <View style={[styles.mainView, { backgroundColor: isDark ? colors.primary : appColors.gray }, { flexDirection: viewRtlStyle }]}>
                            <Image source={item.image} style={styles.image} resizeMode="contain" />
                            <View style={styles.lineView} />
                            <View style={styles.counterView}>
                                <TouchableOpacity activeOpacity={0.7}>
                                    <Text style={[styles.name, { color: colors.text }, { textAlign: textRtlStyle }]}>{t(item.name)}</Text>
                                    <Text style={[styles.weight, { textAlign: textRtlStyle }]}>{t(item.weight)}</Text>
                                </TouchableOpacity>
                                <View style={[styles.priceView, { flexDirection: viewRtlStyle }]}>
                                    <View style={[styles.discountPriceView, { flexDirection: viewRtlStyle }]}>
                                        <Text style={[styles.price, { color: colors.text }]}>{currSymbol}{(item.price * currValue).toFixed(2)}</Text>
                                        <View style={[styles.discountView, { flexDirection: viewRtlStyle }]}>
                                            <Text style={styles.discount}>{item.discount}% </Text>
                                            <Text style={styles.discount}>{t('cartlist.OFF')}</Text>
                                        </View>
                                        <View style={styles.counter}>
                                            <Counter />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Swipeable>
                ))
            )}
        </GestureHandlerRootView>
    );
}
