// import React from "react";
// import { View, FlatList, TouchableOpacity, Image } from "react-native";
// import styles from "./styles";
// import appColors from "../../../../../theme/appColors";

// export function SubCategoryView(props) {
//     return (

//         <FlatList
//     data={props.subCategory} 
//     keyExtractor={(item, index) => index.toString()} 
//     numColumns={3}
//     ItemSeparatorComponent={() => <View style={styles.separator} />}
//     contentContainerStyle={styles.containerStyle}
//     renderItem={({ item }) => (
//         <TouchableOpacity
//             activeOpacity={0.8}
//             onPress={() => props.navigation?.navigate('ProductsDetails')}
//             style={styles.imgView}
//         >
//             <View style={[styles.itemImg, { backgroundColor: appColors.primary }]}>
//                 <Image resizeMode="contain" source={item.image} style={styles.img} />
//             </View>
//             <Text style={styles.nameTxt}>{item.name}</Text>
//         </TouchableOpacity>
//     )}
// />

//     )
// }



// import React from "react";
// import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
// import styles from "./styles";
// import appColors from "../../../../../theme/appColors";

// export function SubCategoryView({ subCategory }) {
//     return (
//         <FlatList
//             data={subCategory} // Receive the subcategories as a prop
//             numColumns={3}
//             keyExtractor={(item) => item.id.toString()} // Use unique ID for key
//             ItemSeparatorComponent={() => <View style={styles.separator} />}
//             contentContainerStyle={styles.containerStyle}
//             renderItem={({ item }) => (
//                 <TouchableOpacity
//                     activeOpacity={0.8}
//                     onPress={() => console.log(`Navigating to details for ${item.name}`)} // Handle item click
//                     style={styles.imgView}
//                 >
//                     <View style={[styles.itemImg, { backgroundColor: appColors.primary }]}>
//                         <Image resizeMode="contain" source={item.image} style={styles.img} />
//                     </View>
//                     <Text style={styles.nameTxt}>{item.name}</Text>
//                 </TouchableOpacity>
//             )}
//         />
//     );
// }





import React from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";

export function SubCategoryView({ subCategory }) {
    return (
        <FlatList
            data={subCategory} 
            numColumns={3}
            keyExtractor={(item) => item.id.toString()} 
            contentContainerStyle={styles.containerStyle}
            renderItem={({ item }) => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => console.log(`Clicked on ${item.name}`)}
                    style={styles.itemContainer}
                >
                    <View style={styles.imageContainer}>
                        <Image source={item.image} style={styles.image} resizeMode="contain" />
                    </View>
                    <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
}
