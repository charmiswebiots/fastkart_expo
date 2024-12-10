// import React from "react";
// import { View } from "react-native";
// import { Switch } from "../../commonComponents";
// import { Icons } from "../../utils/icons";
// import { useValues } from "../../utils/context";

// export function SwitchComponents({ style }) {
//     const { isDark, setIsDark, rtl, setRtl } = useValues();

//     return (
//         <View>
//             <Switch
//                 text="RTL"
//                 icon={<Icons.rtl />}
//                 isOn={rtl}
//                 onToggle={() => setRtl(!rtl)}
//                 style={style}
//             />
//             <Switch
//                 isOn={isDark}
//                 icon={<Icons.dark />}
//                 onToggle={() => setIsDark(!isDark)}
//                 text="Dark Mode"
//                 style={style}
//             />
//         </View>
//     );
// }



import React from "react";
import { View } from "react-native";
import { Switch } from "../../commonComponents";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";

export function SwitchComponents({ style }) {
    const { isDark, setIsDark, rtl, setRtl } = useValues();

    return (
        <View>
            <Switch
                text="RTL"
                icon={<Icons.rtl />}
                isOn={rtl}
                onToggle={() => setRtl(!rtl)} 
                style={style}
            />
            <Switch
                text="Dark Mode"
                icon={<Icons.dark />}
                isOn={isDark}
                onToggle={() => setIsDark(!isDark)}
                style={style}
            />
        </View>
    );
}
