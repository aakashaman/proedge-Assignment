import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

const ContactList = ({ contacts }) => {
  const handleContactPress = (name, phone) => {
    Alert.alert("Contact Options", `${name}\nPhone: ${phone}`, [
      { text: "Call", onPress: () => callContact(phone) },
      { text: "Message", onPress: () => messageContact(phone) },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  const callContact = (phone) => {

    console.log(`Calling ${phone}`);
  };

  const messageContact = (phone) => {
   
    console.log(`Messaging ${phone}`);
  };

  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleContactPress(item.name, item.phone)}
        >
          <Image source={require("./DUMMY.png")} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            {/* <Text style={styles.phone}>Phone: {item.phone}</Text> */}
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 14,
    color: "#555",
  },
});

export default ContactList;
