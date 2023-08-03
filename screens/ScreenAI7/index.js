import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

const HealthScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 1</Text>
        <Text>Date</Text>
        <Text>Title</Text>
        <Text>Short Description</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 2</Text>
        <View style={styles.imageContainer}>
          {
          /* Display uploaded image/images */
        }
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 3</Text>
        <Text>Daily Health Events Logging</Text>
        <TextInput style={styles.input} placeholder="Symptom Input" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Severity Scale" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Duration Recording" placeholderTextColor="#999" />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 4</Text>
        <Text>Food Entry</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007AFF",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  }
});
export default HealthScreen;