// import React, { useEffect, useRef, useState } from 'react';
// import { View, FlatList, Text, Animated } from 'react-native';
// import styles from './styles';
// import { notification } from '../../../data';
// import { useTheme } from '@react-navigation/native';
// import { useValues } from '../../../../utils/context';
// import appColors from '../../../../theme/appColors';


// export function NotificationsView() {

//        const [loading, setLoading] = useState(true);
//         const fadeAnim = useRef(new Animated.Value(1)).current;
    
//         useEffect(() => {
//             const timer = setTimeout(() => {
//                 setLoading(false);
//                 Animated.timing(fadeAnim, {
//                     toValue: 0,
//                     duration: 1200,
//                     useNativeDriver: true,
//                 }).start();
//             }, 3000);
    
//             return () => clearTimeout(timer);
//         }, []);

//     const {colors}=useTheme()
//     const {viewRtlStyle,textRtlStyle,t,isDark}=useValues()

//     const SkeletonLoader = () => (
//         <View style={[styles.loaderContainer,{flexDirection:viewRtlStyle}]}>
//             <Animated.View style={[styles.skeletonIcon, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
//             <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
//             <View style={{ justifyContent: "space-between", flexDirection: viewRtlStyle }}>
//                 <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
//                 <Animated.View style={[styles.skeletonText3, { opacity: fadeAnim }]} />
//             </View>
//         </View>
//     );

//     return (
//         <FlatList
//             data={notification}
//             contentContainerStyle={styles.list}
//             renderItem={({ item }) =>
//                 <View style={styles.dataView}>
//                     <Text style={[styles.day,{textAlign:textRtlStyle}]}>{t(item.day)}</Text>
//                     {item.value.map((data, index) =>
//                         <View key={index} style={[styles.value,{flexDirection:viewRtlStyle}]}>
//                            <View
//                                 style={[
//                                     styles.icon,
//                                     {
//                                         backgroundColor: data.color || appColors.defaultBackground, 
//                                     }
//                                 ]}
//                             >
//                                 {data.icon}
//                             </View>
//                             <View style={[styles.titleView,{flexDirection:viewRtlStyle}]}>
//                                 <View style={styles.offerLeft}>
//                                     <Text style={[styles.title,{color:colors.text},{textAlign:textRtlStyle}]}>{t(data.title)}</Text>
//                                     <Text style={[styles.subTxt,{textAlign:textRtlStyle}]}>{t(data.subtxt)}</Text>
//                                 </View>
//                                 <Text style={[styles.tag,{backgroundColor:isDark?colors.primary:appColors.drawer}]}>{t(data.tag)}</Text>
//                             </View>
//                         </View>
//                     )}
//                 </View>
//             }
//         />
//     );
// }



// import React, { useEffect, useState } from 'react';
// import { View, FlatList, Text, Animated } from 'react-native';
// import styles from './styles';
// import { notification } from '../../../data';
// import { useTheme } from '@react-navigation/native';
// import { useLoadingContext, useValues } from '../../../../utils/context';
// import appColors from '../../../../theme/appColors';
// import ContentLoader, { Rect } from "react-content-loader/native";

// export function NotificationsView() {
//     const [loading, setLoading] = useState(false);
//     const { addressLoaded, setAddressLoaded } = useLoadingContext();

//     useEffect(() => {
//         if (addressLoaded) {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//                 setAddressLoaded(true);
//             }, 3000);
//         }
//     }, [addressLoaded, setAddressLoaded]);

//     const { colors } = useTheme();
//     const { viewRtlStyle, textRtlStyle, t, isDark } = useValues();

//     const SkeletonLoader = () => (
//         <ContentLoader
//             speed={1}
//             width="100%"
//             height={90}
//             viewBox="0 0 340 50"
//             backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//             foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//         >
//             <Rect x="15" y="12" rx="5" ry="5" width="50" height="50" />
//             <Rect x="80" y="16" rx="5" ry="5" width="150" height="18" />
//             <Rect x="80" y="40" rx="5" ry="5" width="100" height="18" />
//             <Rect x="245" y="35" rx="5" ry="5" width="80" height="25" />
       
//         </ContentLoader>
//     );

//     const renderNotificationItem = ({ item }) => (
//         <View style={styles.dataView}>
//             <Text style={[styles.day, { textAlign: textRtlStyle }]}>{t(item.day)}</Text>
//             {item.value.map((data, index) =>
//                 <View key={index} style={[styles.value, { flexDirection: viewRtlStyle }]}>
//                     <View
//                         style={[
//                             styles.icon,
//                             {
//                                 backgroundColor: data.color || appColors.defaultBackground,
//                             }
//                         ]}
//                     >
//                         {data.icon}
//                     </View>
//                     <View style={[styles.titleView, { flexDirection: viewRtlStyle }]}>
//                         <View style={styles.offerLeft}>
//                             <Text style={[styles.title, { color: colors.text }, { textAlign: textRtlStyle }]}>
//                                 {t(data.title)}
//                             </Text>
//                             <Text style={[styles.subTxt, { textAlign: textRtlStyle }]}>
//                                 {t(data.subtxt)}
//                             </Text>
//                         </View>
//                         <Text style={[styles.tag, { backgroundColor: isDark ? colors.primary : appColors.drawer }]}>
//                             {t(data.tag)}
//                         </Text>
//                     </View>
//                 </View>
//             )}
//         </View>
//     );

//     return (
//         <FlatList
//             data={loading ? new Array(10).fill(null) : notification} 
//             contentContainerStyle={styles.list}
//             renderItem={loading ? SkeletonLoader : renderNotificationItem}
//             keyExtractor={(item, index) => index.toString()}
//         />
//     );
// }





import React, { FC, useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
import { notification } from '../../../data';
import { useTheme } from '@react-navigation/native';
import { useLoadingContext, useValues } from '../../../../utils/context';
import appColors from '../../../../theme/appColors';
import ContentLoader, { Rect } from "react-content-loader/native";

interface NotificationItem {
    day: string;
    value: Array<{
        color?: string;
        icon: React.ReactNode;
        title: string;
        subtxt: string;
        tag: string;
    }>;
}

export const NotificationsView: FC = () => {
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

    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t, isDark } = useValues();

    const SkeletonLoader: FC = () => (
        <ContentLoader
            speed={1}
            width="100%"
            height={90}
            viewBox="0 0 340 50"
            backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
            foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
        >
            <Rect x="15" y="12" rx="5" ry="5" width="50" height="50" />
            <Rect x="80" y="16" rx="5" ry="5" width="150" height="18" />
            <Rect x="80" y="40" rx="5" ry="5" width="100" height="18" />
            <Rect x="245" y="35" rx="5" ry="5" width="80" height="25" />
        </ContentLoader>
    );

    const renderNotificationItem = ({ item }: { item: NotificationItem }) => (
        <View style={styles.dataView}>
            <Text style={[styles.day, { textAlign: textRtlStyle }]}>{t(item.day)}</Text>
            {item.value.map((data, index) =>
                <View key={index} style={[styles.value, { flexDirection: viewRtlStyle }]}>
                    <View
                        style={[
                            styles.icon,
                            {
                                backgroundColor: data.color || appColors.defaultBackground,
                            }
                        ]}
                    >
                        {data.icon}
                    </View>
                    <View style={[styles.titleView, { flexDirection: viewRtlStyle }]}>
                        <View style={styles.offerLeft}>
                            <Text style={[styles.title, { color: colors.text }, { textAlign: textRtlStyle }]}>
                                {t(data.title)}
                            </Text>
                            <Text style={[styles.subTxt, { textAlign: textRtlStyle }]}>
                                {t(data.subtxt)}
                            </Text>
                        </View>
                        <Text style={[styles.tag, { backgroundColor: isDark ? colors.primary : appColors.drawer }]}>
                            {t(data.tag)}
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );

    return (
        <FlatList
            data={loading ? new Array<null>(10).fill(null) : notification} 
            contentContainerStyle={styles.list}
            renderItem={loading ? SkeletonLoader : renderNotificationItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}