import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {StyleProps} from "react-native-reanimated";

interface ButtonProps {
    title: string;
    style?: StyleProps
}

export default function Button({title, style}: ButtonProps) {
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.buttonContainer, style]}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "#000",
        alignSelf: "flex-start"
    },
    buttonText: {
        color: "#fff"
    }
})