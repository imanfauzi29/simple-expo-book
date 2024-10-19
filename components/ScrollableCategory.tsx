import {FlatList, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import {useState} from "react";
import useBookStore from "@/store/useBookStore";
import {RecentBooksType} from "@/services/books/types";

const categories = [
    {
        name: "Popular",
        id: "popular"
    },
    {
        name: "Latest",
        id: "latest"
    },
    {
        name: "Best Seller",
        id: "best-seller"
    },
    {
        name: "Upcomming",
        id: "upcomming"
    }
]

export default function ScrollableCategory() {
    const {recentBooks, setMainBooks} = useBookStore(state => state)
    const [currentCategories, setCurrentCategories] = useState("popular")

    const filterBooks = (categories: string) => {
        setCurrentCategories(categories)

        switch (categories) {
            case "latest":
                setMainBooks(filterLatest(recentBooks))
                break;
            case "best-seller":
                setMainBooks(filterBestSeller(recentBooks))
                break;
            case "upcomming":
                setMainBooks(filterUpcomming(recentBooks))
                break;
            default:
                setMainBooks(recentBooks)
        }
    }

    const filterLatest = (books: RecentBooksType[]) => books.sort(() => Math.random() - 0.5)
    const filterBestSeller = (books: RecentBooksType[]) => books.sort(() => Math.random() - 1.5)
    const filterUpcomming = (books: RecentBooksType[]) => books.sort(() => Math.random() - 2)

    return (
        <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginTop: 30}}
            keyExtractor={(item) => item.id}
            renderItem={
                ({item: category}) => (
                    <TouchableWithoutFeedback
                        key={category.id}
                        onPress={() => filterBooks(category.id)}>
                        <View style={styles.categoryContainer}>
                            <ThemedText
                                type={"default"}
                                style={[{
                                    fontWeight: "bold",
                                    fontSize: 18,
                                }, category.id === currentCategories ? styles.categoryActive : styles.categoryNormal]}>
                                {category.name}
                            </ThemedText>
                            {category.id === currentCategories && (
                                <View style={styles.borderBottom}/>
                            )}
                        </View>
                    </TouchableWithoutFeedback>
                )
            }/>
    )
}

const styles = StyleSheet.create({
    horizontalScrollContainer: {
        marginTop: 30,
        marginBottom: 40
    },
    borderBottom: {
        height: 5,
        backgroundColor: "#E87A7B",
        borderRadius: 10,
        width: "50%",
        alignSelf: "center"
    },
    categoryNormal: {
        color: "#a3a3a3"
    },
    categoryActive: {
        color: "#000"
    },
    categoryContainer: {
        marginRight: 30
    },
})