import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

const AppointmentComponent = () => {
  const styles = StyleSheet.create({
    content: {
      flexDirection: "column",
      height: 200,
      width: 260,
      margin: 10,
      padding: 10,
      backgroundColor: "#28469B",
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
        <Text style={styles.textHeading}>2021-08-17</Text>
        <Text style={styles.textParagraph}>11:00 - Veterinären, kontroll av skada.</Text>
        <Text style={styles.textHeading}>2021-08-25</Text>
        <Text style={styles.textParagraph}>18:00 - Skoning.</Text>
        <Text style={styles.textHeading}>2021-08-26</Text>
        <Text style={styles.textParagraph}>12:00 - Veterinären, lämna för operation.</Text>
        <Text style={styles.textHeading}>2021-09-01</Text>
        <Text style={styles.textParagraph}>10:00 - Hämta hem från veterinären.</Text>
        <Text style={styles.textHeading}>2021-09-10</Text>
        <Text style={styles.textParagraph}>13:00 - Återbesök hos veterinären.</Text>
      </View>
    </ScrollView>
  );
};

export default AppointmentComponent;
