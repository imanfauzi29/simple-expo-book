import {FlatList, Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";
import {ThemedView} from "@/components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import {ThemedText} from "@/components/ThemedText";
import CardBook from "@/components/CardBook";
import ScrollableCategory from "@/components/ScrollableCategory";
import {books} from "@/data/Books";
import {offers} from "@/data/Offers";
import Offers from "@/components/Offers";
import {DirectLink} from "@/helpers/util";
import useWidthCol from "@/hooks/useWidthCol";

export default function Main() {
    const {columns, cardWidth} = useWidthCol(2)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ThemedView style={styles.container}>
                    <ThemedView style={styles.navbar}>
                        <Ionicons name={"menu-sharp"} size={30}/>
                        <Pressable style={styles.profileImageContainer}>
                            <Image
                                style={styles.profileImage}
                                source={{uri: "https://picsum.photos/50"}}
                            />
                        </Pressable>
                    </ThemedView>
                    <ThemedView style={styles.discoverContainer}>
                        <View>
                            <ThemedText type={"title"} style={{fontFamily: "ChakraPetch", width: "70%"}}>
                                Discover Latest Book
                            </ThemedText>
                        </View>

                        <ScrollView horizontal>
                            {offers.map((offer, i) => (
                                <Offers key={i} {...offer} />

                            ))}
                        </ScrollView>

                        <View>
                            <ThemedText type={"defaultSemiBold"} style={{marginBottom: 14, fontSize: 18}}>
                                Continue Reading
                            </ThemedText>
                            <FlatList
                                key={"#"}
                                data={books}
                                horizontal
                                contentContainerStyle={{justifyContent: 'center', gap: 12}}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(_, index) => `#${index.toString()}`}
                                renderItem={
                                    ({item}) => (
                                        <CardBook onPress={DirectLink} style={{width: 200}} {...item} />
                                    )
                                }/>
                        </View>

                        <View style={{marginBottom: 30}}>
                            <ScrollableCategory/>
                        </View>
                        <View>
                            <FlatList
                                key={"#"}
                                data={books}
                                scrollEnabled={false}
                                numColumns={columns}
                                contentContainerStyle={{gap: 32}}
                                columnWrapperStyle={{gap: 16}}
                                keyExtractor={(_, index) => `#${index.toString()}`}
                                renderItem={
                                    ({item, index}) => (
                                        <CardBook
                                            onPress={DirectLink}
                                            style={[books.length === index + 1 ? {width: cardWidth} : {flex: 1}]}
                                            {...item} />
                                    )
                                }/>
                        </View>
                    </ThemedView>
                </ThemedView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: StatusBar.currentHeight,
    },
    profileImageContainer: {
        borderRadius: 40,
        width: 40,
        height: 40,
        overflow: 'hidden',
    },
    profileImage: {
        height: '100%',
        width: '100%',
    },
    discoverContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 100,
    },
    discoverText: {
        fontSize: 32
    },

});
