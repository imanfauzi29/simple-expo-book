import {StyleSheet, Text, View} from "react-native";
import Button from "@/components/Button";
import {OffersType} from "@/data/Offers";

export default function Offers({subTitle, title, background}: OffersType) {
    return (
        <View
            style={[
                {
                    backgroundColor: background,
                },
                styles.offerContainer
            ]}>
            <Text style={{marginBottom: 1, fontSize: 16}}>
                {title}
            </Text>
            <Text style={{fontSize: 18}}>
                {subTitle}
            </Text>
            <Button title={"Read More"} style={{marginTop: 20}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    offerContainer: {
        padding: 16,
        marginVertical: 30,
        minWidth: 300,
        minHeight: 150,
        borderRadius: 16,
        justifyContent: "center",
        marginRight: 12
    }
})