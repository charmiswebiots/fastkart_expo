// // import React from "react";
// // import { View } from "react-native";
// // import styless from "./styles";
// // import SwitchToggle from "toggle-switch-react-native";
// // import { MenuItem } from "../../otherComponents/drawerComponents/components";
// // import appColors from "../../theme/appColors";

// // export function Switch({
// //     isOn,
// //     onToggle,
// //     width = "100%",
// //     text = "",
// //     icon = null,
// //     style,
// // }) {
// //     return (
// //         <View style={[styless.switchView, { flexDirection: "row", width }]}>
// //             <MenuItem text={text} icon={icon} showSwitch />
// //             <View style={style}>
// //             <SwitchToggle
// //                 isOn={isOn}
// //                 onToggle={onToggle}
// //                 thumbOnStyle={styless.thumbOnStyle}
// //                 trackOnStyle={styless.trackOnStyle}
// //                 circleColor={appColors.secondBlack}
// //             />
// //             </View>
// //         </View>
// //     );
// // }


// import React from "react";
// import { View } from "react-native";
// import styless from "./styles";
// import SwitchToggle from "toggle-switch-react-native";
// import { MenuItem } from "../../otherComponents/drawerComponents/components";
// import appColors from "../../theme/appColors";

// export function Switch({
//     isOn,
//     onToggle,
//     width = "100%",
//     text = "",
//     icon = null,
//     style,
// }) {
//     return (
//         <View style={[styless.switchView, { flexDirection: "row", width }]}>
//             <MenuItem text={text} icon={icon} showSwitch />
//             <View style={style}>
//                 <SwitchToggle
//                     isOn={isOn}
//                     onToggle={onToggle}
//                     thumbOnStyle={styless.thumbOnStyle}
//                     trackOnStyle={styless.trackOnStyle}
//                     circleColorOn={appColors.offer} 
//                     circleColorOff={appColors.gray} 
//                 />
//             </View>
//         </View>
//     );
// }


import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MenuItem } from "../../otherComponents/drawerComponents/components";
import appColors from "../../theme/appColors";
import styles from "./styles";

export function Switch({
    isOn,
    onToggle,
    width = "100%",
    text = "",
    icon = null,
    style,
}) {
    return (
        <View style={[styles.switchView, { flexDirection: "row", width }]}>
            <MenuItem text={text} icon={icon} showSwitch />
            <TouchableOpacity
                style={[
                    styles.switchContainer,
                    isOn ? styles.switchOn : styles.switchOff,
                    style,
                ]}
                onPress={onToggle}
                activeOpacity={0.7}
            >
                <View
                    style={[
                        styles.circle,
                        isOn ? styles.circleOn : styles.circleOff,
                    ]}
                />
            </TouchableOpacity>
        </View>
    );
}

// const styles = StyleSheet.create({
    // switchView: {
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     marginVertical: 10,
    // },
    // switchContainer: {
    //     width: 50,
    //     height: 25,
    //     borderRadius: 15,
    //     justifyContent: "center",
    //     padding: 3,
    // },
    // switchOn: {
    //     backgroundColor: appColors.switch,
    // },
    // switchOff: {
    //     backgroundColor: appColors.switch,
    // },
    // circle: {
    //     width: 20,
    //     height: 20,
    //     borderRadius: 10,
    // },
    // circleOn: {
    //     backgroundColor: appColors.primary,
    //     alignSelf: "flex-end",
    // },
    // circleOff: {
    //     backgroundColor: appColors.white,
    //     alignSelf: "flex-start",
    // },
// });
