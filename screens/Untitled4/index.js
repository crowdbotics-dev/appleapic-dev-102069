import { FlatList } from "react-native";
import { View } from "react-native";
import { Switch } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.soObuTMG}>Lorem ipsum…</Text><Switch style={styles.HejmDFWB}></Switch><FlatList style={styles.DEyHqxQe} renderItem={({}) => {}} ItemSeparatorComponent={() => <View style={styles.yyCOHJxG} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  soObuTMG: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  HejmDFWB: {
    width: 50,
    height: 25
  },
  DEyHqxQe: {
    position: "absolute",
    width: 100,
    height: 150
  },
  yyCOHJxG: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled4;