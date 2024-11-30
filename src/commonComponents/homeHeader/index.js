// // import React from "react";
// // import { View, TouchableOpacity, Text, Image } from "react-native";
// // import styles from "./styles";
// // import images from "../../utils/images";
// // import { Icons } from "../../utils/icons";
// // import { useNavigation } from "@react-navigation/native";

// // export function HomeHeader() {
// //     const navigation = useNavigation()


// //     const toggleDrawer = () => {
// //         navigation.navigate('DrawerComponent');
// //     };

// //     return (
// //         <View style={[styles.mainView]}>
// //             <View style={[styles.view]}>
// //                 <TouchableOpacity  onPress={toggleDrawer}>
// //                     <Icons.category/>
// //                 </TouchableOpacity>
// //                 <Image source={images.fastkart} style={[styles.logoImg]} />
// //             </View>
// //             <View style={[styles.view]}>
// //                 <Icons.location />
// //                 <Text style={[styles.locationText, {

// //                 }]}>Los Angeles</Text>
// //                 <Image source={images.demoProfile} style={[styles.profile
// //                 ]} resizeMode='contain' />
// //             </View>
// //         </View>
// //     )
// // }





// import React from "react";
// import { View, TouchableOpacity, Text, Image } from "react-native";
// import styles from "./styles";
// import images from "../../utils/images";
// import { Icons } from "../../utils/icons";
// import { useNavigation } from "@react-navigation/native";

// export function HomeHeader({ navigation }) {

//     const toggleDrawer = () => {
//         navigation.toggleDrawer(); // Open drawer
//     };

//     return (
//         <View style={[styles.mainView]}>
//             <View style={[styles.view]}>
//                 <TouchableOpacity onPress={toggleDrawer}>
//                     <Icons.category />
//                 </TouchableOpacity>
//                 <Image source={images.fastkart} style={[styles.logoImg]} />
//             </View>
//             <View style={[styles.view]}>
//                 <Icons.location />
//                 <Text style={[styles.locationText]}>Los Angeles</Text>
//                 <Image source={images.demoProfile} style={[styles.profile]} resizeMode="contain" />
//             </View>
//         </View>
//     );
// }




// import React from "react";
// import { View, TouchableOpacity, Text, Image } from "react-native";
// import { DrawerActions } from "@react-navigation/native";
// import styles from "./styles";
// import images from "../../utils/images";
// import { Icons } from "../../utils/icons";

// export function HomeHeader({ navigation }) {
//     const toggleDrawer = () => {
//         navigation.toggleDrawer()
//     };

//     return (
//         <View style={[styles.mainView]}>
//             <View style={[styles.view]}>
//                 <TouchableOpacity onPress={toggleDrawer}>
//                     <Icons.category />
//                 </TouchableOpacity>
//                 <Image source={images.fastkart} style={[styles.logoImg]} />
//             </View>
//             <View style={[styles.view]}>
//                 <Icons.location />
//                 <Text style={[styles.locationText]}>Los Angeles</Text>
//                 <Image source={images.demoProfile} style={[styles.profile]} resizeMode="contain" />
//             </View>
//         </View>
//     );
// }




import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./styles";
import images from "../../utils/images";
import { Icons } from "../../utils/icons";

export function HomeHeader({ toggleDrawer }) {
    return (
        <View style={[styles.mainView]}>
            <View style={[styles.view]}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Icons.category />
                </TouchableOpacity>
                <Image source={images.fastkart} style={[styles.logoImg]} />
            </View>
            <View style={[styles.view]}>
                <Icons.location />
                <Text style={[styles.locationText]}>Los Angeles</Text>
                <Image source={images.demoProfile} style={[styles.profile]} resizeMode="contain" />
            </View>
        </View>
    );
}
