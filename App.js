import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import ContactList from "./ContactList";

const App = () => {
  const [searchText, setSearchText] = useState("");

  const contacts = [
    { id: "1", name: "John Doe", phone: "123-456-7890" },
    { id: "2", name: "Jane Smith", phone: "987-654-3210" },
    { id: "3", name: "Bob Johnson", phone: "555-555-5555" },
    { id: "4", name: "Alice Brown", phone: "111-222-3333" },
    { id: "5", name: "Michael Davis", phone: "444-555-6666" },
    { id: "6", name: "Emily Wilson", phone: "777-888-9999" },
    { id: "7", name: "David Lee", phone: "222-333-4444" },
    { id: "8", name: "Olivia Thompson", phone: "888-999-0000" },
    { id: "9", name: "Daniel Harris", phone: "333-444-5555" },
    { id: "10", name: "Sophia Taylor", phone: "666-777-8888" },
  ];

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText.toLowerCase()) ||
      contact.phone.includes(searchText)
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Image
          source={require("./search.png")}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search contacts..."
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <ContactList contacts={filteredContacts} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#F5FCFF",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
});

export default App;
