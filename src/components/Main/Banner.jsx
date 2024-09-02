import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { responsiveWidth, responsiveHeight, responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions';

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
    marginBottom: responsiveHeight(3),
    marginTop: responsiveHeight(2.5),
  },
  bannerImage: {
    width: responsiveScreenWidth(88),
    height: responsiveScreenHeight(16),
    resizeMode: "cover",
    borderRadius: 20,
  },
  bannerTextContainer: {
    position: "absolute",
    bottom: responsiveHeight(2),
    marginHorizontal: responsiveWidth(6),
  },
  bannerText: {
    color: "#fff",
    fontSize: responsiveScreenFontSize(2.6),
    letterSpacing: 1,
  },
  promoContainer: {
    backgroundColor: "red",
    position: "absolute",
    top: responsiveScreenHeight(1.5),
    marginHorizontal: responsiveScreenWidth(6),
    padding: responsiveWidth(.6),
    borderRadius: 8,
  },
  promoText: { 
    color: "#fff", 
    fontSize: responsiveScreenFontSize(1.6), 
    fontWeight: "700" 
  },
});
