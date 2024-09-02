import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import useStore from "../../zustand/store";

const Liked = () => {
  // Get liked coffees from Zustand store
  const likedCoffees = useStore((state) => state.likedCoffees);

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Special for you</Text>
      </View>

      {/* Liked Coffees Section */}
      {likedCoffees.length > 0 ? (
        likedCoffees.map((coffee) => (
          <View key={coffee.id} style={styles.card}>
            <Image style={styles.image} source={{ uri: coffee.image }} />
            <View style={styles.detailsContainer}>
              <Text style={styles.cardTitle}>{coffee.title}</Text>
              <Text style={styles.descriptionText}>
                {coffee.description || "A delightful coffee blend you will love!"}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noLikedText}>No liked coffees yet.</Text>
      )}
    </ScrollView>
  );
};

export default Liked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    // marginBottom: 30,
  },
  titleContainer: {
    marginTop: 50,
  },
  titleText: {
    color: "#333",
    fontSize: 22,
    fontWeight: "600",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    padding: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    // marginBottom: 30
  },
  image: {
    resizeMode: "cover",
    width: 120,
    height: 150,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: "center",
  },
  cardTitle: {
    color: "#333",
    fontSize: 18,
    fontWeight: "600",
  },
  descriptionText: {
    color: "#666",
    fontSize: 14,
    marginTop: 5,
  },
  noLikedText: {
    marginTop: 20,
    color: "#666",
    fontSize: 16,
    textAlign: "center",
  },
});
