import React from "react";
import { View ,TouchableOpacity,Text} from "react-native";
import styles from "./styles";
import { Input } from "../input";
import { windowWidth } from "../../theme/appConstant";
import { Icons } from "../../utils/icons";

export function SearchFilter({onPress}) {
    return (
        <View style={[styles.inputView]}>
            <Input width={windowWidth(360)} placeholder={'Search Products here..'} rightIcon={<Icons.voiceSearch />} leftIcon={<Icons.search />}  style={styles.input}/>
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
                <Text style={styles.filter}>Filter</Text>
            </TouchableOpacity>
        </View>
    )
}