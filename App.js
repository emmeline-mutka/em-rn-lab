// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import MenuComponent from "./Components/MenuComponent";
import ScrollviewComponent from "./Components/ScrollviewComponent";

const App = () => {
  const [content, setContent] = useState("default");
  const [displayingContent, setDisplayingContent] = useState(null);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000000",
      color: "#FFFFFF",
      alignItems: "center",
      paddingTop: 120,
    },
    horseLogo: {
      width: 138,
      height: 190,
    },
  });

  function displayContent(checkContent) {
    console.log("Check content value: ", checkContent);
    switch (checkContent) {
      case "diary":
        setDisplayingContent(<ScrollviewComponent />);
        break;
      default:
        setDisplayingContent(null);
    }
  }

  function getWeather () {
    console.log("Checking weather")
  }

  useEffect(() => {
    displayContent(content);
    // console.log("Content value: ", content)
  }, [content]);

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("./img/horsePurple.png")}
        style={styles.horseLogo}
      />
      <h1>Hästkollen</h1>
      <MenuComponent menuFunction={setContent} />
      <View>{displayingContent}</View>
    </View>
  );
};

export default App;
