import {Pressable, StyleSheet, Text, View} from "react-native";
import {Image} from "expo-image"
import {StyleProps} from "react-native-reanimated";

interface CardBookProps {
    image: any,
    author: string,
    book_name: string,
    url: string,
    onPress: (url: string) => void,
    style?: StyleProps
}

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function CardBook({book_name, author, image, url, onPress, style}: CardBookProps) {
    return (
        <Pressable onPress={() => onPress(url)} style={[styles.cardBookContainer, style]}>
            <Image
                source={image}
                placeholder={{blurhash}}
                contentFit="cover"
                transition={1000}
                style={styles.bookImage}/>
            <View style={{marginTop: 10}}>
                <Text style={{fontSize: 16}}>{book_name}</Text>
                <Text
                    style={{color: "#a3a3a3", marginTop: 10}}>
                    {author}
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardBookContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    bookImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
})