import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

const ScrollviewComponent = () => {
  const styles = StyleSheet.create({
    content: {
      height: 200,
      width: 260,
      margin: 10,
      padding: 10,
      backgroundColor: "#9900CC",
      borderRadius: 2,
    },
  });
  
  return (
    <ScrollView style={styles.content}>
      <View>
        <Text>2021-08-26</Text>
        <Text>
          Dressyrträning för Åsa på ridskolan. Tränade mycket lydnad och
          framåtbjudning
        </Text>
        <Text>2021-08-27</Text>
        <Text>
          Dressyr. Tränade mycket tempoväxling och början till galoppombyten.
        </Text>
        <Text>2021-08-28</Text>
        <Text>Vilodag.</Text>
        <Text>2021-08-29</Text>
        <Text>Två timmars uteritt.</Text>
        <Text>2021-08-30</Text>
        <Text>Hoppning. Kombinations hinder och studs.</Text>
        <Text>2021-08-31</Text>
        <Text>En timmes uteritt med galoppintervaller.</Text>
      </View>
    </ScrollView>
  );
};

export default ScrollviewComponent;
