import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Main/Header";
import SearchBar from "../../components/Main/SearchBar";
import Banner from "../../components/Main/Banner";
import TabSlider from "../../components/Main/TabSlider";

const Home = ( {navigation} ) => {

  return (
      <SafeAreaView style={styles.container}>
      {/* Header Component */}
      <Header/>

      {/* Title Text */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Find the best Coffee to your taste</Text>
      </View>

      {/* SearchBar and Button */}
      <View style={styles.searchContainer}>
        <SearchBar />
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.buttonImage}
            source={require("../../assets/images/slider.png")}
          />
        </TouchableOpacity>
      </View>

      {/* Banner Image */}
      <Banner />

      {/* Slider Different Coffee Data */}
      <TabSlider />

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
  titleContainer: {
    marginTop: 30,
    marginBottom: 30,
    width: 220,
  },
  titleText: {
    color: "#444444",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 30,
  },
  searchContainer: {
    flexDirection: "row",
    gap: 13,
  },
  button: {
    backgroundColor: "#967259",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 25,
    borderBottomLeftRadius: 13,
    padding: 16,
  },
  buttonImage: {
    width: 40,
    height: 40,
  },

});
