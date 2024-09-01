import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Banner = () => {
  return (
    <View>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        <Image
          style={styles.bannerImage}
          source={require("../../assets/images/banner.png")}
        />

        {/* Promo */}
        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>Promo</Text>
        </View>
        {/* Banner Text */}
        <View style={styles.bannerTextContainer}>
          <View style={styles.blackBackground}>
            <Text style={styles.bannerText}>Buy one get</Text>
          </View>
          <View>
            <Text style={styles.bannerText}>one free</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  bannerContainer: {
    position: "relative",
    marginBottom: 20,
    marginTop: 25,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
  bannerTextContainer: {
    position: "absolute",
    bottom: "25%",
    marginHorizontal: 24,
  },
  bannerText: {
    color: "#fff",
    fontSize: 28,
    letterSpacing: 1.1,
    // bottom: 5,
    // backgroundColor: '#000'
  },
  promoContainer: {
    backgroundColor: "red",
    position: "absolute",
    top: 20,
    marginHorizontal: 24,
    padding: 8,
    borderRadius: 10,
  },
  promoText: { color: "#fff", fontSize: 14, fontWeight: "700" },
});
