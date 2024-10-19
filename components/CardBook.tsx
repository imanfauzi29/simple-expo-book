import {Pressable, StyleSheet, Text, View} from "react-native";
import {Image} from "expo-image"
import {StyleProps} from "react-native-reanimated";
import {Link} from "expo-router";
import {RecentBooksType} from "@/services/books/types";

interface CardBookProps extends RecentBooksType {
    style?: StyleProps
}

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function CardBook({title, id, authors, image, style}: CardBookProps) {
    return (
        <View style={[styles.cardBookContainer, style]}>
            <Link href={`/detail/${id}`} push asChild>
                <Pressable>
                    <Image
                        source={image}
                        placeholder={{blurhash}}
                        contentFit="cover"
                        transition={1000}
                        style={styles.bookImage}/>
                    <View style={{marginTop: 10}}>
                        <Text style={{fontSize: 16}}>{title}</Text>
                        <Text
                            style={{color: "#a3a3a3", marginTop: 10}}>
                            {authors}
                        </Text>
                    </View>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBookContainer: {
        backgroundColor: '#fff',
    },
    bookImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
})