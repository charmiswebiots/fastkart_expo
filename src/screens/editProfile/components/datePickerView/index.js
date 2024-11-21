// import { View } from "react-native";
// import DatePicker from "react-native-neat-date-picker";
// import appColors from "../../../../theme/appColors";


// export function DatePickerView(props) {

//     const onConfirm = (output) => {
//         var data = output.dateString.split('-');
//         var originalDate = data[2] + '-' + data[1] + '-' + data[0]
//         props.onConfirm(false, originalDate)
//     }

//     return (
//         <DatePicker
//             isVisible={props.showDatePicker}
//             mode={'single'}
//             onCancel={props.onCancel}
//             onConfirm={onConfirm}
//             colorOptions={{
//                 backgroundColor: appColors.white,
//                 selectedDateBackgroundColor: appColors.primary,
//                 headerColor: appColors.primary,
//                 confirmButtonColor: appColors.primary,
//                 weekDaysColor: appColors.primary,
//                 changeYearModalColor: appColors.primary,
                
//             }}
//         />
//     )
// }


import { View, Text } from 'react-native'
import React from 'react'

export function DatePickerView (){
  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

