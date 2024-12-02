// import React, { useEffect, useState } from "react";
// import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
// import styles from "./styles";
// import { categoryData } from "../../../../data";
// import appColors from "../../../../../theme/appColors";
// import { windowHeight, windowWidth } from "../../../../../theme/appConstant";

// export function CategoryView({ onPress }) {
//     const [categoryId, setCategoryId] = useState(1);
//     const [subCategories, setSubCategories] = useState(3);

//     useEffect(() => {
//         matchValue(1);
//     }, []);

//     const matchValue = (id) => {
//         setCategoryId(id);

//         const subCategory = categoryData.find((cat) => cat.id === id)?.subCategory || [];
//         setSubCategories(subCategory);
//     };

//     return (
//          <View style={{ flexDirection: 'row' }}>
//             <View>
//                 {categoryData.map((item) => (
//                     <View key={item.id}>
//                         <TouchableOpacity
//                             onPress={() => matchValue(item.id)}
//                             activeOpacity={0.8}
//                             style={[
//                                 styles.nameView,
//                                 {
//                                     backgroundColor: categoryId === item.id ? appColors.white : appColors.drawer,
//                                 },
//                             ]}
//                         >
//                             <Image source={item.image} style={styles.image} resizeMode="cover" />
//                             <Text style={styles.name}>{item.name}</Text>
//                         </TouchableOpacity>
//                         <View style={styles.line} />
//                     </View>
//                 ))}
//             </View>
//             {/* <View style={{ flexDirection: 'row', marginTop: windowHeight(120), marginHorizontal: windowHeight(2), padding: windowHeight(2) }}> */}
//                 <FlatList
//                     data={subCategories}
//                     keyExtractor={(item) => item.id.toString()}
//                     ItemSeparatorComponent={() => <View style={styles.separator} />}
//                     contentContainerStyle={styles.containerStyle}
//                     renderItem={({ item }) => (
//                         <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.imgView}>
//                             <View style={[styles.itemImg, { backgroundColor: appColors.drawer }]}>
//                                 <Image resizeMode='contain' source={item.image} style={styles.img} />
//                             </View>

//                                 <Text style={styles.nameTxt}>{item.name}</Text>
//                         </TouchableOpacity>
//                     )}
//                 />
//             </View>
//         // </View>
//     );
// }





import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import styles from "./styles";
import { categoryData } from "../../../../data";
import appColors from "../../../../../theme/appColors";
import { windowHeight } from "../../../../../theme/appConstant";

export function CategoryView({ onPress }) {
    const [categoryId, setCategoryId] = useState(categoryData[1]?.id);
    const [subCategories, setSubCategories] = useState(categoryData[1]?.subCategory || []);

    useEffect(() => {
        if (categoryData.length > 0) {
            matchValue(categoryData[1]?.id);
        }
    }, []);

    const matchValue = (id) => {
        setCategoryId(id);
        const subCategory = categoryData.find((cat) => cat.id === id)?.subCategory || [];
        setSubCategories(subCategory);
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <View>
                {categoryData.map((item) => (
                    <View key={item.id}>
                        <TouchableOpacity
                            onPress={() => matchValue(item.id)}
                            activeOpacity={0.8}
                            style={[
                                styles.nameView,
                                {
                                    backgroundColor: categoryId === item.id ? appColors.white : appColors.drawer,
                                },
                            ]}
                        >
                            <Image source={item.image} style={styles.image} resizeMode="cover" />
                            <Text style={styles.name}>{item.name}</Text>
                        </TouchableOpacity>
                        <View style={styles.line} />
                    </View>
                ))}
            </View>
            <View style={{ marginTop: windowHeight(125), left: windowHeight(8) }}>
                <FlatList
                    data={subCategories}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    contentContainerStyle={styles.containerStyle}
                    renderItem={({ item }) => (
                        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.imgView}>
                            <View style={[styles.itemImg, { backgroundColor: appColors.drawer }]}>
                                <Image resizeMode="contain" source={item.image} style={styles.img} />
                            </View>
                            <Text style={styles.nameTxt}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    );
}
