import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Header = () => {

  // navigation
  const navigation = useNavigation();

  return (
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.menuIcon}
            source={require("../../assets/images/menu.png")}
          />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 25,
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../assets/images/moon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{ height: 40, width: 40 }}
              source={require("../../assets/images/profile.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
});
