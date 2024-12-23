import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { useValues } from "../../utils/context";

interface AddNewProps {
    onPress: () => void;
    text: string;
}

export function AddNew({ onPress, text }: AddNewProps) {
    const { viewRtlStyle } = useValues();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[styles.newAddView, { flexDirection: viewRtlStyle }]}
        >
            <Text style={styles.addAdd}>+</Text>
            <Text style={styles.addAdd}>{text}</Text>
        </TouchableOpacity>
    );
}



// import { TouchableOpacity, Text } from "react-native";
// import styles from "./styles";
// import { useValues } from "../../utils/context";
// import { FC } from 'react';

// interface AddNewProps {
//     onPress: () => void;
//     text: string;
// }

// export function AddNew (props):AddNewProps {
//     const { viewRtlStyle } = useValues();

//     return (
//         <TouchableOpacity activeOpacity={0.8} onPress={props.onPress} style={[styles.newAddView, { flexDirection: viewRtlStyle }]}>
//             <Text style={styles.addAdd}>+</Text>
//             <Text style={styles.addAdd}> {props.text} </Text>
//         </TouchableOpacity>
//     );
// }