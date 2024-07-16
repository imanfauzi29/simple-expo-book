import {Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import {AntDesign, Entypo, MaterialIcons} from "@expo/vector-icons";
import {Image} from "expo-image";

export default function DetailBook() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{marginBottom: 80}}>
                <View style={styles.navbar}>
                    <Pressable>
                        <AntDesign name="arrowleft" size={30}/>
                    </Pressable>

                    <Pressable>
                        <Feather name={"bookmark"} size={30}/>
                    </Pressable>
                </View>

                <View style={{padding: 20}}>
                    {/*cover */}
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                        <View style={{flex: 1}}>
                            <Image
                                source={require("@/assets/images/Hobbit-cover.jpg")}
                                style={{width: '100%', height: 400, borderRadius: 30}}/>
                        </View>
                        <View style={{flexDirection: "column"}}>
                            <View style={{flexDirection: 'row', marginBottom: 60}}>
                                <AntDesign name="star" size={20} color="#FBB850"/>
                                <View style={{marginLeft: 4}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>4.5</Text>
                                    <Text
                                        style={{color: "#adadad"}}>
                                        rating
                                    </Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row', marginBottom: 60}}>
                                <MaterialIcons name="pages" size={20} color="#C859C2"/>
                                <View style={{marginLeft: 4}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>287</Text>
                                    <Text
                                        style={{color: "#adadad"}}>
                                        rating
                                    </Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <Entypo name="download" size={24} color="#5976c6"/>
                                <View style={{marginLeft: 4}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 16}}>232+</Text>
                                    <Text
                                        style={{color: "#adadad"}}>
                                        downloads
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/*title*/}
                    <View style={{justifyContent: 'space-between', marginTop: 20, flexDirection: 'row'}}>
                        <View>
                            <Text style={{fontSize: 24, color: "#000", fontWeight: 'bold'}}>It Ends With Us</Text>
                            <Text style={{color: "#ababab", fontSize: 15}}>Colleen Delgen</Text>
                        </View>

                        <Pressable>
                            <MaterialIcons name="favorite" size={24} color="red"/>
                        </Pressable>
                    </View>

                    {/*description*/}
                    <View style={{marginTop: 30}}>
                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Description</Text>
                        <Text style={{color: "#ababab", fontSize: 16}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                            an
                            unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus
                            PageMaker including versions of Lorem Ipsum
                        </Text>
                    </View>
                </View>

            </ScrollView>

            <View style={{position: 'absolute', width: '100%', bottom: 20, paddingHorizontal: 20}}>
                <Pressable style={{
                    backgroundColor: "#e46558",
                    paddingVertical: 18,
                    paddingHorizontal: 30,
                    borderRadius: 10,
                }}>
                    <Text style={{color: "#fff", fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>Buy a
                        Book</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: StatusBar.currentHeight,
    },
})