import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const Details = ({ route }) => {
  // Accessing the item from the route parameters
  const { item } = route.params;

  // State management
  const [coffeeSize, setCoffeeSize] = useState("S");

  // Function to handle size selection
  const handleTabPress = (tab) => {
    setCoffeeSize(tab);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.imageContainer}>
            <ImageBackground
              style={styles.imageBackground}
              source={{ uri: item?.image }}
              resizeMode="cover"
            >
              {/* View for the Icons */}
              <View>
                <TouchableOpacity style={styles.iconContainer}>
                  <AntDesign name="arrowleft" size={24} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#ffffff",
                    position: "absolute",
                    top: 20,
                    right: 20,
                    borderRadius: 25,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AntDesign name="hearto" size={24} color="#333" />
                </TouchableOpacity>
              </View>

              {/* Transparent Background */}
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  height: 150,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  padding: 25,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                  opacity: 0.9,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ color: "#fff", fontSize: 25 }}>
                      {item?.title}
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 12,
                        fontWeight: "500",
                        marginTop: 5,
                      }}
                    >
                      with {item?.ingredients.slice(0, 2).join(", ")}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", gap: 25 }}>
                    <View style={{ alignItems: "center" }}>
                      <MaterialCommunityIcons
                        name="seed"
                        size={26}
                        color="#dddddd"
                      />
                      <Text
                        style={{
                          color: "#dddddd",
                          fontSize: 12,
                          fontWeight: "500",
                          marginTop: 5,
                        }}
                      >
                        Coffee
                      </Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Entypo name="drop" size={26} color="#dddddd" />
                      <Text
                        style={{
                          color: "#dddddd",
                          fontSize: 12,
                          fontWeight: "500",
                          marginTop: 5,
                        }}
                      >
                        {item?.ingredients.slice(0, 1)}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ marginTop: 20 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <AntDesign name="star" size={20} color="#D17842" />
                      <Text
                        style={{
                          color: "#f1f1f1",
                          fontSize: 14,
                          fontWeight: "500",
                        }}
                      >
                        4.8
                      </Text>
                      <Text
                        style={{
                          color: "#f1f1f1",
                          fontSize: 12,
                          fontWeight: "500",
                          marginLeft: 5,
                        }}
                      >
                        [6,098]
                      </Text>
                    </View>

                    <Text style={{ color: "#f1f1f1", fontWeight: "500" }}>
                      Medium Roasted
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{ marginHorizontal: 10, marginTop: 20 }}>
            {/* Description */}
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Description</Text>

            {/* Description text */}
            <View style={{ marginTop: 15 }}>
              <Text numberOfLines={3} style={{ fontSize: 14, lineHeight: 25 }}>
                {item?.description}
              </Text>
            </View>

            {/* Size of the Coffee */}
            <View style={{ marginTop: 25 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>Size</Text>
              <View style={styles.sizeContainer}>
                {["S", "M", "L"].map((size, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.sizeOption,
                      coffeeSize === size && styles.selectedSizeOption,
                    ]}
                    onPress={() => handleTabPress(size)}
                  >
                    <Text
                      style={[
                        styles.sizeText,
                        coffeeSize === size && styles.selectedSizeText,
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Quantity */}
            <View style={{ marginTop: 25, marginBottom: 80 }}>
              <Text style={{ fontSize: 18, fontWeight: "600" }}>Quantity</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity>
                  <AntDesign name="minuscircle" size={40} color="#967259" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>1</Text>
                <TouchableOpacity>
                  <AntDesign name="pluscircle" size={40} color="#967259" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>

      {/* Bottom Navigator */}
      <View style={styles.bottomNavigator}>
        <Text style={styles.priceText}>$12.99</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  safeArea: {
    marginTop: 60,
    padding: 20,
    borderRadius: 20,
  },
  imageContainer: {
    height: 500,
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
  },
  imageBackground: {
    height: "100%",
    width: "100%",
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff",
    position: "absolute",
    top: 20,
    left: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  sizeOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedSizeOption: {
    backgroundColor: "#967259",
  },
  sizeText: {
    color: "#333",
    fontWeight: "bold",
  },
  selectedSizeText: {
    color: "#fff",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  quantityText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  bottomNavigator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "#967259",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  addToCartText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
