import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Liked = () => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Special for you</Text>
      </View>

      {/* Special Offer Section */}
      <View style={styles.specialContainer}>
        <View style={styles.specialContent}>
          {/* Image */}
          <Image
            style={styles.image}
            source={{
              uri: "https://coffee.alexflipnote.dev/qGGgML0A4t4_coffee.png",
            }}
          />
          {/* Description */}
          <Text style={styles.descriptionText}>
            Specially mixed and brewed which you must try!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  titleContainer: {
    marginTop: 50,
  },
  titleText: {
    color: "#333",
    fontSize: 22,
    fontWeight: "600",
  },
  specialContainer: {
    width: "100%",
    backgroundColor: "#967259",
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
  },
  specialContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    resizeMode: "cover",
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  descriptionText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    marginLeft: 20,
  },
});
