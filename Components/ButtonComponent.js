import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const ButtonComponent = ({ text, color, contextFunction, squareShape }) => {
  const buttonText = text;
  const buttonColor = color;
  const functionToRun = contextFunction;
  const buttonShape = squareShape;
  const styles = StyleSheet.create({
    buttonStyling: {
      height: 30,
      width: 80,
      margin: 5,
      backgroundColor: buttonColor,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 2,
    },
    editButtonStyling: {
      height: 60,
      width: 60,
      margin: 5,
      backgroundColor: buttonColor,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 30,
    },
  });

  return (
    <Pressable
      style={buttonShape ? styles.buttonStyling : styles.editButtonStyling}
      onPress={functionToRun}
    >
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
