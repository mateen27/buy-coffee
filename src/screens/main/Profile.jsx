import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@example.com</Text>
      </View>

      {/* Profile Actions */}
      <View style={styles.profileActions}>
        <TouchableOpacity style={styles.actionItem}>
          <AntDesign name="shoppingcart" size={24} color="#967259" />
          <Text style={styles.actionText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <MaterialIcons name="settings" size={24} color="#967259" />
          <Text style={styles.actionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <AntDesign name="customerservice" size={24} color="#967259" />
          <Text style={styles.actionText}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <AntDesign name="logout" size={24} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  profileHeader: {
    alignItems: 'center',
    backgroundColor: '#967259',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    elevation: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 15,
  },
  userName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  userEmail: {
    fontSize: 16,
    color: '#f1f1f1',
    marginTop: 5,
  },
  profileActions: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 20,
    elevation: 5,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 15,
    fontWeight: '500',
  },
  logoutButton: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: '#967259',
    paddingVertical: 15,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '700',
  },
});
