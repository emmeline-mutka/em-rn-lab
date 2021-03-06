import React from "react";
import { StyleSheet, View } from "react-native";
import ButtonComponent from "./ButtonComponent";

const MainComponent = (props) => {
  const styles = StyleSheet.create({
    content: {
      flexDirection: "row",
    },
  });

  function diary() {
    props.menuFunction("diary");
  }

  function feed() {
    props.menuFunction("feed");
  }

  function appointment() {
    props.menuFunction("appointment");
  }

  return (
    <View style={styles.content}>
      <ButtonComponent 
        text="Dagbok" 
        color="#B83C96" 
        contextFunction={diary}
        squareShape={true} 
      />
      <ButtonComponent
        text="Foderstat"
        color="#5C2B81"
        contextFunction={feed}
        squareShape={true}
      />
      <ButtonComponent
        text="Bokningar"
        color="#28469B"
        contextFunction={appointment}
        squareShape={true}
      />
    </View>
  );
};

export default MainComponent;
