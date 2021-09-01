import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

const DiaryComponent = () => {
  const styles = StyleSheet.create({
    content: {
      height: 200,
      width: 260,
      margin: 10,
      padding: 10,
      backgroundColor: "#B83C96",
      borderRadius: 2,
    },
    textHeading: {
      fontWeight: "bold",
    },
    textParagraph: {
      marginBottom: 5,
    },
  });

  return (
    <ScrollView style={styles.content}>
      <View>
        <Text style={styles.textHeading}>2021-08-26</Text>
        <Text style={styles.textParagraph}>
          Dressyrträning på ridskolan. Tränade tempoväxlingar och galoppombyten.
        </Text>
        <Text style={styles.textHeading}>2021-08-27</Text>
        <Text style={styles.textParagraph}>
          Dressyr. Tränade lydnad och framåtbjudning.
        </Text>
        <Text style={styles.textHeading}>2021-08-28</Text>
        <Text style={styles.textParagraph}>Vilodag.</Text>
        <Text style={styles.textHeading}>2021-08-29</Text>
        <Text style={styles.textParagraph}>Två timmars uteritt.</Text>
        <Text style={styles.textHeading}>2021-08-30</Text>
        <Text style={styles.textParagraph}>
          Hoppning. Kombinations hinder och studs.
        </Text>
        <Text style={styles.textHeading}>2021-08-31</Text>
        <Text style={styles.textParagraph}>
          En timmes uteritt med galoppintervaller.
        </Text>
      </View>
    </ScrollView>
  );
};

export default DiaryComponent;
