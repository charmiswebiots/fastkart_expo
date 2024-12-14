import React from "react";
import { View } from "react-native";
import { Switch } from "../../commonComponents";
import { Icons } from "../../utils/icons";
import { useValues } from "../../utils/context";
import { RtlSwitch } from "../../commonComponents";

export function SwitchComponents({ style }) {
    const { isDark, setIsDark, rtl, setRtl } = useValues();

    return (
        <View>
            <RtlSwitch
                text="RTL"
                icon={<Icons.rtl />}
                isOn={rtl}
                onToggle={() => setRtl(!rtl)}
                style={style}
            />
            <Switch
                isOn={isDark}
                icon={<Icons.dark />}
                switchIcon
                onToggle={() => setIsDark(!isDark)}
                text="Dark Mode"
                style={style}
            />
        </View>
    );
}


