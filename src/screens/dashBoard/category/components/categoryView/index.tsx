// import React, { useEffect, useState } from "react";
// import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
// import styles from "./styles";
// import { categoryData } from "../../../../data";
// import appColors from "../../../../../theme/appColors";
// import { useLoadingContext, useValues } from "../../../../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import { windowHeight } from "../../../../../theme/appConstant";
// import ContentLoader, { Rect } from "react-content-loader/native";


// export function CategoryView({ onPress }) {


//     const { isDark, viewRtlStyle, t } = useValues();
//     const { colors } = useTheme();
//     const [categoryId, setCategoryId] = useState(categoryData[1]?.id);
//     const [subCategories, setSubCategories] = useState(categoryData[1]?.subCategory || []);

//     useEffect(() => {
//         if (categoryData.length > 0) {
//             matchValue(categoryData[1]?.id);
//         }
//     }, []);

//     const matchValue = (id) => {
//         setCategoryId(id);
//         const subCategory = categoryData.find((cat) => cat.id === id)?.subCategory || [];
//         setSubCategories(subCategory);
//     };

//  const [loading, setLoading] = useState(false);
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

//     return (
//         <View style={{ flexDirection: viewRtlStyle }}>
//             <View>
//                 {categoryData.map((item) => (
//                     <View key={item.id}>
//                         <TouchableOpacity
//                             onPress={() => matchValue(item.id)}
//                             activeOpacity={0.8}
//                             style={[
//                                 styles.nameView,
//                                 {
//                                     backgroundColor:
//                                         categoryId === item.id
//                                             ? isDark
//                                                 ? colors.background
//                                                 : appColors.white
//                                             : isDark
//                                                 ? colors.primary
//                                                 : appColors.drawer,
//                                 },
//                             ]}
//                         >
//                             <Image source={item.image} style={styles.image} resizeMode="cover" />
//                             <Text style={[styles.name, { color: colors.text }]}>{t(item.name)}</Text>
//                         </TouchableOpacity>
//                         <View style={styles.line} />
//                     </View>
//                 ))}
//             </View>

//             <View style={styles.view}>
//                 <FlatList
//                     data={subCategories}
//                     columnWrapperStyle={styles.colum} 
//                     keyExtractor={(item) => item.id.toString()}
//                     ItemSeparatorComponent={() => <View style={styles.separator} />}
//                     contentContainerStyle={[styles.containerStyle, { flexDirection: viewRtlStyle }]}
//                     renderItem={({ item }) => (
//                         <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.imgView}>
//                             <View
//                                 style={[
//                                     styles.itemImg,
//                                     {
//                                         backgroundColor: isDark
//                                             ? colors.primary
//                                             : appColors.drawer,
//                                     },
//                                 ]}
//                             >
//                                 <Image resizeMode="contain" source={item.image} style={styles.img} />
//                             </View>
//                             <Text style={[styles.nameTxt]}>{t(item.name)}</Text>
//                         </TouchableOpacity>
//                     )}
//                 />
//             </View>
//         </View>
//     );
// }





// import React, { useEffect, useState } from "react";
// import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
// import styles from "./styles";
// import { categoryData } from "../../../../data";
// import appColors from "../../../../../theme/appColors";
// import { useLoadingContext, useValues } from "../../../../../utils/context";
// import { useTheme } from "@react-navigation/native";
// import { windowHeight, windowWidth } from "../../../../../theme/appConstant";
// import ContentLoader, { Rect } from "react-content-loader/native";

// export function CategoryView({ onPress }) {
//     const { isDark, viewRtlStyle, t } = useValues();
//     const { colors } = useTheme();
//     const [categoryId, setCategoryId] = useState(categoryData[1]?.id);
//     const [subCategories, setSubCategories] = useState(categoryData[1]?.subCategory || []);
//     const [loading, setLoading] = useState(false);
//     const { addressLoaded, setAddressLoaded } = useLoadingContext();

//     useEffect(() => {
//         if (categoryData.length > 0) {
//             matchValue(categoryData[1]?.id);
//         }
//     }, []);

//     const matchValue = (id) => {
//         setCategoryId(id);
//         const subCategory = categoryData.find((cat) => cat.id === id)?.subCategory || [];
//         setSubCategories(subCategory);
//     };

//     useEffect(() => {
//         if (addressLoaded) {
//             setLoading(true);
//             setTimeout(() => {
//                 setLoading(false);
//                 setAddressLoaded(true);
//             }, 3000);
//         }
//     }, [addressLoaded, setAddressLoaded]);

//     const SkeletonLoader = () => (
//         <View style={{ flexDirection: viewRtlStyle }}>
//             <View>
//                 {[1, 2, 3, 4].map((_, index) => (
//                     <View key={`skeleton-${index}`}>
//                         <View style={styles.nameView}>
//                             <ContentLoader
//                                 speed={1}
//                                 width={windowWidth(90)}
//                                 height={windowHeight(60)}
//                                 viewBox="0 0 90 90"
//                                 backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//                                 foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//                             >
//                                 <Rect x="0" y="0" rx="6" ry="6" width="90" height="90" />
//                             </ContentLoader>
//                             <ContentLoader
//                                 speed={1}
//                                 width={windowWidth(110)}
//                                 height={windowHeight(25)}
//                                 viewBox="0 0 110 20"
//                                 backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//                                 foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//                             >
//                                 <Rect x="0" y="10" rx="4" ry="4" width="110" height="20" />
//                             </ContentLoader>
//                         </View>
//                         <View style={styles.line} />
//                     </View>
//                 ))}
//             </View>
//             <View style={styles.view}>
//                 <FlatList
//                     data={Array(3).fill({})} // Placeholder data
//                     keyExtractor={(_, index) => `skeleton-item-${index}`}
//                     numColumns={2}
//                     columnWrapperStyle={styles.colum}
//                     contentContainerStyle={[styles.containerStyle, { flexDirection: viewRtlStyle }]}
//                     renderItem={() => (
//                         <View style={styles.imgView}>
//                             <ContentLoader
//                                 speed={1}
//                                 width={windowWidth(82)}
//                                 height={windowHeight(65)}
//                                 viewBox="0 0 82 65"
//                                 backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//                                 foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//                             >
//                                 <Rect x="0" y="0" rx="6" ry="6" width="82" height="80" />
//                             </ContentLoader>
//                             <ContentLoader
//                                 speed={1}
//                                 width={windowWidth(100)}
//                                 height={windowHeight(20)}
//                                 viewBox="0 0 100 20"
//                                 backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
//                                 foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
//                             >
//                                 <Rect x="12" y="0" rx="4" ry="4" width="78" height="20" />
//                             </ContentLoader>
//                         </View>
//                     )}
//                 />
//             </View>
//         </View>
//     );

//     return loading ? (
//         <SkeletonLoader />
//     ) : (
//         <View style={{ flexDirection: viewRtlStyle }}>
//             <View>
//                 {categoryData.map((item) => (
//                     <View key={item.id}>
//                         <TouchableOpacity
//                             onPress={() => matchValue(item.id)}
//                             activeOpacity={0.8}
//                             style={[
//                                 styles.nameView,
//                                 {
//                                     backgroundColor:
//                                         categoryId === item.id
//                                             ? isDark
//                                                 ? colors.background
//                                                 : appColors.white
//                                             : isDark
//                                                 ? colors.primary
//                                                 : appColors.drawer,
//                                 },
//                             ]}
//                         >
//                             <Image source={item.image} style={styles.image} resizeMode="cover" />
//                             <Text style={[styles.name, { color: colors.text }]}>{t(item.name)}</Text>
//                         </TouchableOpacity>
//                         <View style={styles.line} />
//                     </View>
//                 ))}
//             </View>

//             <View style={styles.view}>
//                 <FlatList
//                     data={subCategories}
//                     keyExtractor={(item) => item.id.toString()}
//                     numColumns={2}
//                     columnWrapperStyle={styles.colum}
//                     contentContainerStyle={[styles.containerStyle, { flexDirection: viewRtlStyle }]}
//                     renderItem={({ item }) => (
//                         <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.imgView}>
//                             <View
//                                 style={[
//                                     styles.itemImg,
//                                     {
//                                         backgroundColor: isDark ? colors.primary : appColors.drawer,
//                                     },
//                                 ]}
//                             >
//                                 <Image resizeMode="contain" source={item.image} style={styles.img} />
//                             </View>
//                             <Text style={[styles.nameTxt]}>{t(item.name)}</Text>
//                         </TouchableOpacity>
//                     )}
//                 />
//             </View>
//         </View>
//     );
// }









import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import { categoryData } from "../../../../data";
import appColors from "../../../../../theme/appColors";
import { useLoadingContext, useValues } from "../../../../../utils/context";
import { useTheme } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../../../theme/appConstant";
import ContentLoader, { Rect } from "react-content-loader/native";

interface CategoryViewProps {
    onPress: () => void;
}

export function CategoryView({ onPress }: CategoryViewProps): JSX.Element {
    const { isDark, viewRtlStyle, t } = useValues();
    const { colors } = useTheme();
    const [categoryId, setCategoryId] = useState<string | undefined>(categoryData[1]?.id);
    const [subCategories, setSubCategories] = useState<Array<any>>(categoryData[1]?.subCategory || []);
    const [loading, setLoading] = useState<boolean>(false);
    const { addressLoaded, setAddressLoaded } = useLoadingContext();

    useEffect(() => {
        if (categoryData.length > 0) {
            matchValue(categoryData[1]?.id);
        }
    }, []);

    const matchValue = (id: string | undefined): void => {
        setCategoryId(id);
        const subCategory = categoryData.find((cat) => cat.id === id)?.subCategory || [];
        setSubCategories(subCategory);
    };

    useEffect(() => {
        if (addressLoaded) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setAddressLoaded(true);
            }, 3000);
        }
    }, [addressLoaded, setAddressLoaded]);

    const SkeletonLoader = (): JSX.Element => (
        <View style={{ flexDirection: viewRtlStyle }}>
            <View>
                {[1, 2, 3, 4].map((_, index) => (
                    <View key={`skeleton-${index}`}>
                        <View style={styles.nameView}>
                            <ContentLoader
                                speed={1}
                                width={windowWidth(90)}
                                height={windowHeight(60)}
                                viewBox="0 0 90 90"
                                backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
                                foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
                            >
                                <Rect x="0" y="0" rx="6" ry="6" width="90" height="90" />
                            </ContentLoader>
                            <ContentLoader
                                speed={1}
                                width={windowWidth(110)}
                                height={windowHeight(25)}
                                viewBox="0 0 110 20"
                                backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
                                foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
                            >
                                <Rect x="0" y="10" rx="4" ry="4" width="110" height="20" />
                            </ContentLoader>
                        </View>
                        <View style={styles.line} />
                    </View>
                ))}
            </View>
            <View style={styles.view}>
                <FlatList
                    data={Array(3).fill({})}
                    keyExtractor={(_, index) => `skeleton-item-${index}`}
                    numColumns={2}
                    columnWrapperStyle={styles.colum}
                    contentContainerStyle={[styles.containerStyle, { flexDirection: viewRtlStyle }]}
                    renderItem={() => (
                        <View style={styles.imgView}>
                            <ContentLoader
                                speed={1}
                                width={windowWidth(82)}
                                height={windowHeight(65)}
                                viewBox="0 0 82 65"
                                backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
                                foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
                            >
                                <Rect x="0" y="0" rx="6" ry="6" width="82" height="80" />
                            </ContentLoader>
                            <ContentLoader
                                speed={1}
                                width={windowWidth(100)}
                                height={windowHeight(20)}
                                viewBox="0 0 100 20"
                                backgroundColor={isDark ? appColors.loaderDarkBackground : appColors.loaderBackground}
                                foregroundColor={isDark ? appColors.loaderDarkHighlight : appColors.loaderLightHighlight}
                            >
                                <Rect x="12" y="0" rx="4" ry="4" width="78" height="20" />
                            </ContentLoader>
                        </View>
                    )}
                />
            </View>
        </View>
    );

    return loading ? (
        <SkeletonLoader />
    ) : (
        <View style={{ flexDirection: viewRtlStyle }}>
            <View>
                {categoryData.map((item) => (
                    <View key={item.id}>
                        <TouchableOpacity
                            onPress={() => matchValue(item.id)}
                            activeOpacity={0.8}
                            style={[
                                styles.nameView,
                                {
                                    backgroundColor:
                                        categoryId === item.id
                                            ? isDark
                                                ? colors.background
                                                : appColors.white
                                            : isDark
                                                ? colors.primary
                                                : appColors.drawer,
                                },
                            ]}
                        >
                            <Image source={item.image} style={styles.image} resizeMode="cover" />
                            <Text style={[styles.name, { color: colors.text }]}>{t(item.name)}</Text>
                        </TouchableOpacity>
                        <View style={styles.line} />
                    </View>
                ))}
            </View>

            <View style={styles.view}>
                <FlatList
                    data={subCategories}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.colum}
                    contentContainerStyle={[styles.containerStyle, { flexDirection: viewRtlStyle }]}
                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.imgView}>
                            <View
                                style={[
                                    styles.itemImg,
                                    {
                                        backgroundColor: isDark ? colors.primary : appColors.drawer,
                                    },
                                ]}
                            >
                                <Image resizeMode="contain" source={item.image} style={styles.img} />
                            </View>
                            <Text style={[styles.nameTxt]}>{t(item.name)}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}