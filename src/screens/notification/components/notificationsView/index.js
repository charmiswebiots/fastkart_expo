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




import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, Text, Animated } from 'react-native';
import styles from './styles';
import { notification } from '../../../data';
import { useTheme } from '@react-navigation/native';
import { useValues } from '../../../../utils/context';
import appColors from '../../../../theme/appColors';

export function NotificationsView() {
    const [loading, setLoading] = useState(true);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 1200,
                useNativeDriver: true,
            }).start();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const { colors } = useTheme();
    const { viewRtlStyle, textRtlStyle, t, isDark } = useValues();

    const SkeletonLoader = () => (
        <View style={[styles.loaderContainer, { flexDirection: viewRtlStyle }]}>
            <Animated.View style={[styles.skeletonIcon, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText, { opacity: fadeAnim }]} />
            <Animated.View style={[styles.skeletonText1, { opacity: fadeAnim }]} />
            <View style={{ justifyContent: "space-between", flexDirection: viewRtlStyle }}>
                <Animated.View style={[styles.skeletonText2, { opacity: fadeAnim }]} />
            </View>
        </View>
    );

    const renderNotificationItem = ({ item }) => (
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
            data={loading ? new Array(10).fill(null) : notification} 
            contentContainerStyle={styles.list}
            renderItem={loading ? SkeletonLoader : renderNotificationItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}
