import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

const FeedComponent = () => {
  const styles = StyleSheet.create({
    content: {
      flexDirection: "column",
      height: 200,
      width: 260,
      margin: 10,
      padding: 10,
      backgroundColor: "#5C2B81",
      borderRadius: 2,
    },
    textHeading: {
      fontSize: 15,
      fontWeight: "bold",
    },
  });

  return (
    <ScrollView style={styles.content}>
      <View>
        <Text style={styles.textHeading}>Morgon:</Text>
        <Text>Hö: 1 kg</Text>
        <Text>Kraftfoder: 1 dl Vetekli, 1 dl Mash, 1 dl Foderjäst </Text>
        <Text style={styles.textHeading}>Lunch:</Text>
        <Text>Hö: 2 kg</Text>
        <Text style={styles.textHeading}>Eftermiddag:</Text>
        <Text>Hö: 1 kg</Text>
        <Text style={styles.textHeading}>Kväll:</Text>
        <Text>Hö: 2 kg</Text>
        <Text>
          Kraftfoder: 1 dl Mash, 0,5 dl Foderjäst, 1 dl Mineraler, 1 tsk
          B-vitamin
        </Text>
      </View>
    </ScrollView>
  );
};

export default FeedComponent;
