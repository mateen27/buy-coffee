import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Header from "../../components/Main/Header";
import SearchBar from "../../components/Main/SearchBar";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Component of the Application */}
      <Header />
      <View style={styles.textconatiner}>
        <Text style={styles.text}>Find the best Coffee to your taste</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 13 }}>
        <SearchBar />
        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/slider.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 23,
  },
  textconatiner: {
    marginTop: 30,
    marginBottom: 30,
    marginBottom: 25,
    width: 220,
  },
  text: {
    color: "#444444",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 30,
  },
  image: {
    width: 40,
    height: 40,
  },
  buttonContainer: {
    backgroundColor: "#967259",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 25,
    padding: 16,
    borderBottomLeftRadius: 13
  },
});
