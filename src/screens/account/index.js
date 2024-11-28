import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../commonComponents/header";
import appColors from "../../theme/appColors";
import { ProfileView } from "./components";

export function Account() {
    const navigation = useNavigation(); 

    return (
        <SafeAreaView style={{ backgroundColor: appColors.white, flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Header
                    onPress={() => navigation.goBack()}
                    isText
                    titleText={'Account'} 
                />
                <View style={styles.mainView}>
                <ProfileView/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}