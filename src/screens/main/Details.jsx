import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import CoffeeSizeSlider from "../../components/Main/CoffeeSizeSlider";

const Details = ({ route }) => {
  // Accessing the item from the route parameters
  const { item } = route.params;

  return (
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
            </View>
          </ImageBackground>
        </View>

        <View style = {{ marginHorizontal: 10, marginTop: 20 }}>
          {/* Description */}
          <Text style = {{ fontSize: 18, fontWeight: '600' }}>Description</Text>

          {/* Description text */}
          <View style = {{ marginTop: 15 }}>
            <Text numberOfLines={3} style = {{ fontSize: 14, lineHeight: 25}}>{item?.description}</Text>
          </View>

          {/* Size of the Coffee */}
          <View style = {{ marginTop: 25 }}>
            <Text style = {{ fontSize: 18, fontWeight: '600' }}>Size</Text>
            <CoffeeSizeSlider />
          </View>

          {/* Quantity */}
          <View style = {{ marginTop: 25 }}>
            <Text style = {{ fontSize: 18, fontWeight: '600' }}>Quantity</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
});
