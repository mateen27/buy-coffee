import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import fetchCoffeeData from "../../api/fetchCoffeeData";
import { FlatList } from "react-native-gesture-handler";

const TabSlider = () => {
  const [selectedTab, setSelectedTab] = useState("All Coffee");
  const [data, setData] = useState();

  //   fetching the api data
    useEffect(() => {
        const fetchData = async () => {
            try {
              const coffeeData = await fetchCoffeeData();
              console.log('coffee data', coffeeData);
              setData(coffeeData);
            } catch (error) {
              console.error("Error fetching coffee data:", error);
            }
          };

          fetchData();
    }, [])

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    switch (tab) {
      case "All Coffee":
        // fetchData();
        break;
      case "Espresso":
        // setData(DATA_MACHIATO);
        break;
      case "Latte":
        // setData(DATA_LATTE);
        break;
      default:
        break;
    }
  };

  //   cards of the coffee
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item?.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.id * 19 * 2}</Text>
      </View>
      <TouchableOpacity style={styles.addToCartContainer}>
        <Text style={styles.addToCartText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.sliderContainer}>
        <TouchableOpacity
          style={[
            styles.sliderButton,
            selectedTab === "All Coffee" && styles.selectedSliderButton,
          ]}
          onPress={() => handleTabPress("All Coffee")}
        >
          <Text
            style={[
              styles.sliderText,
              selectedTab === "All Coffee" && styles.selectedSliderText,
            ]}
          >
            All Coffee
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sliderButton,
            selectedTab === "Espresso" && styles.selectedSliderButton,
          ]}
          onPress={() => handleTabPress("Espresso")}
        >
          <Text
            style={[
              styles.sliderText,
              selectedTab === "Espresso" && styles.selectedSliderText,
            ]}
          >
            Espresso
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sliderButton,
            selectedTab === "Machiato" && styles.selectedSliderButton,
          ]}
          onPress={() => handleTabPress("Machiato")}
        >
          <Text
            style={[
              styles.sliderText,
              selectedTab === "Machiato" && styles.selectedSliderText,
            ]}
          >
            Machiato
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sliderButton,
            selectedTab === "Latte" && styles.selectedSliderButton,
          ]}
          onPress={() => handleTabPress("Latte")}
        >
          <Text
            style={[
              styles.sliderText,
              selectedTab === "Latte" && styles.selectedSliderText,
            ]}
          >
            Latte
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
      <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          style={{ flexGrow: 1, }}
        />
      </View>
    </>
  );
};

export default TabSlider;

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 8,
  },
  sliderButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  selectedSliderButton: {
    backgroundColor: "#967259",
  },
  sliderText: {
    fontSize: 16,
    color: "#888",
  },
  selectedSliderText: {
    color: "#fff",
    fontWeight: "bold",
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    margin: 8,
    padding: 16,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 5,
    // marginBottom: 10
  },
  itemImage: {
    width: 150,
    height: 150,
    borderRadius: 18,
  },
  itemDetails: {
    marginTop: 8,
    // position: 'relative'
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#967259",
    marginTop: 5,
    textAlign: "center",
  },
  cardContainer: {
    flex: 1
  },
  addToCartContainer: {
    backgroundColor: "#967259",
    padding: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
    // borderRadius: 10,
    height: 45,
    width: 45,
    borderTopLeftRadius: 20,
    alignItems: "center",
  },
  addToCartText: {
    textAlign: "center",
    fontSize: 22,
    color: "#f1f1f1",
  },
});
