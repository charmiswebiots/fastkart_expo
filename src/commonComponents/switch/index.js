// import React from "react";
// import { View, TouchableOpacity } from "react-native";
// import { MenuItem } from "../../otherComponents/drawerComponents/components";
// import styles from "./styles";
// import { useValues } from "../../utils/context";
// import { Icons } from "../../utils/icons";

// export function Switch({
//     isOn,
//     onToggle,
//     width = "100%",
//     text = "",
//     icon = null,
//     style,
// }) {

//     const {viewRtlStyle,viewSelfRtlStyle}=useValues()
//     return (
//         <View style={[styles.switchView, { flexDirection: viewRtlStyle, width },{alignItems:viewSelfRtlStyle}]}>
//             <MenuItem text={text} icon={icon} showSwitch />
//             <TouchableOpacity
//                 style={[
//                     styles.switchContainer,
//                     isOn ? styles.switchOn : styles.switchOff,
//                     style,
//                 ]}
//                 onPress={onToggle}
//                 activeOpacity={0.7}
//             >
              
//                   {isOn ? (
//                     <Icons.darkIcon style={styles.iconStyle} />
//                 ) : (
//                     <View style={styles.circle} />
//                 )}
//             </TouchableOpacity>
//         </View>
//     );
// }





import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MenuItem } from "../../otherComponents/drawerComponents/components";
import styles from "./styles";
import { useValues } from "../../utils/context";
import { Icons } from "../../utils/icons";

export function Switch({
    isOn,
    onToggle,
    width = "100%",
    text = "",
    icon = null,
    style,
}) {
    const { viewRtlStyle, viewSelfRtlStyle } = useValues();

    return (
        <View
            style={[
                styles.switchView,
                { flexDirection: viewRtlStyle, width },
                { alignItems: viewSelfRtlStyle },
            ]}
        >
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
                {text === "Dark Mode" && isOn ? (
                    <Icons.darkIcon style={styles.iconStyle} />
                ) : (
                    <View style={styles.circle} />
                )}
            </TouchableOpacity>
        </View>
    );
}
