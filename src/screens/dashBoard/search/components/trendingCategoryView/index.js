// import { View, Text, ScrollView,Image } from "react-native";
// import styles from "./styles";
// import { category1 } from "../../../../data";

// export function TrendingCategoryView() {
//     return (
//         <View>
//             <Text style={[styles.txt]}>Trending category</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
//                 {
//                     category1.map((item, key) =>
//                         <View style={[styles.image, {
//                             backgroundColor: data.color || appColors.defaultBackground, 
//                         }]}>
//                             <Image source={item.image} style={styles.img} />
//                         </View>
//                     )}
//             </ScrollView>
//         </View>
//     )
// }



import { View, Text, ScrollView, Image } from "react-native";
import styles from "./styles";
import { category1 } from "../../../../data";
import { windowHeight } from "../../../../../theme/appConstant";

export function TrendingCategoryView() {
    return (
        <View>
            <Text style={[styles.txt]}>Trending category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
                {
                    category1.map((item, key) =>
                        <View
                            key={key} 
                            style={[
                                styles.image,
                                {
                                    backgroundColor: item.backgroundColor || appColors.defaultBackground, 
                                    borderColor: item.borderColor || appColors.defaultBorderColor,      
                                    borderWidth: windowHeight(1), 
                                }
                            ]}
                        >
                            <Image source={item.image} style={styles.img} />
                        </View>
                    )
                }
            </ScrollView>
        </View>
    );
}
