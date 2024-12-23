// import { View, TouchableOpacity, Text } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../utils/icons";
// import { useState } from "react";
// import { useValues } from "../../utils/context";

// interface CounterProps {
//     color: string;
//     style?: any;
// }


// export function Counter({ color, style }: CounterProps) {
//     const { viewRtlStyle } = useValues()

//     const [count, setCount] = useState(0)

//     const increaseCount = () => {
//         setCount(count + 1)
//     }

//     const decreaseCount = () => {
//         if (count != 0) {
//             setCount(count - 1)

//         }
//     }
//     return (
//         <View style={[styles.mainView, style, { flexDirection: viewRtlStyle }]}>
//             <TouchableOpacity style={[styles.decrease]} onPress={decreaseCount}>
//                 <Icons.decrease color={color} />
//             </TouchableOpacity>
//             <Text style={[styles.txt]}>{count}</Text>
//             <TouchableOpacity style={[styles.increase]} onPress={increaseCount}>
//                 <Icons.increase color={color} />
//             </TouchableOpacity>
//         </View>
//     )
// }



// import { View, TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
// import styles from "./styles";
// import { Icons } from "../../utils/icons";
// import { useState } from "react";
// import { useValues } from "../../utils/context";

// interface CounterProps {
//   color: string;
//   style?: any;
// }

// export function Counter({ color, style }: CounterProps) {
//   const { viewRtlStyle } = useValues();
//   const [count, setCount] = useState<number>(0); 

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   const decreaseCount = () => {
//     if (count !== 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <View style={[styles.mainView, style, { flexDirection: viewRtlStyle }]}>
//       <TouchableOpacity style={styles.decrease} onPress={decreaseCount}>
//         <Icons.decrease color={color} />
//       </TouchableOpacity>
//       <Text style={styles.txt}>{count}</Text>
//       <TouchableOpacity style={styles.increase} onPress={increaseCount}>
//         <Icons.increase color={color} />
//       </TouchableOpacity>
//     </View>
//   );
// }




import { View, TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import styles from "./styles";
import { Icons } from "../../utils/icons";
import { useState } from "react";
import { useValues } from "../../utils/context";

interface CounterProps {
  color: string;
  style?: ViewStyle; // Optional prop for custom styles
}

export function Counter({ color, style }: CounterProps) {
  const { viewRtlStyle } = useValues();
  const [count, setCount] = useState<number>(0); // Type the count state as a number

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={[styles.mainView, style, { flexDirection: viewRtlStyle }]}>
      <TouchableOpacity style={styles.decrease} onPress={decreaseCount}>
        <Icons.decrease color={color} />
      </TouchableOpacity>
      <Text style={styles.txt}>{count}</Text>
      <TouchableOpacity style={styles.increase} onPress={increaseCount}>
        <Icons.increase color={color} />
      </TouchableOpacity>
    </View>
  );
}
