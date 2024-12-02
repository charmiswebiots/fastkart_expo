import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Input } from "../../../../commonComponents";
import { Icons } from "../../../../utils/icons";
import appColors from "../../../../theme/appColors";
import { windowWidth } from "../../../../theme/appConstant";

export function DetailsView(props) {
    return (
        <View style={styles.container}>
            <Input
                style={styles.input}
                width={windowWidth(30)}

                placeholder={'Andrea Joanne'}
                rightIcon={<Icons.fullName color />}
            />
            <Input
                style={styles.input}
                placeholder={'andreajoanne@gmail.com'}
                rightIcon={<Icons.atSign />}
            />
            <Input
                style={styles.input}
                placeholder={'9876543210'}
                keyboardType={'numeric'}
                rightIcon={<Icons.call color={appColors.black} />}
            />
            <Input
                style={styles.input}
                value={props.date}
                editable={false}
                rightIcon={
                    <TouchableOpacity onPress={props.onPress}>
                        <Icons.calender color={appColors.black} />
                    </TouchableOpacity>
                }
            />
        </View>
    )
}