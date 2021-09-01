// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import MainComponent from "./Components/MainComponent";
import DiaryComponent from "./Components/DiaryComponent";
import FeedComponent from "./Components/FeedComponent";
import AppointmentComponent from "./Components/AppointmentComponent";

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
    mainContent: {
      alignItems: "center",
    },
    horseLogo: {
      width: 256,
      height: 172,
      resizeMode: "contain",
      marginBottom: 30,
    },
  });

  function displayContent(checkContent) {
    // console.log("Check content value: ", checkContent);
    switch (checkContent) {
      case "diary":
        setDisplayingContent(<DiaryComponent />);
        break;
      case "feed":
        setDisplayingContent(<FeedComponent />);
        break;
      case "appointment":
        setDisplayingContent(<AppointmentComponent />);
        break;
      default:
        setDisplayingContent(null);
    }
  }

  // function getWeather () {
  //   console.log("Checking weather")
  // }

  useEffect(() => {
    displayContent(content);
    // console.log("Content value: ", content)
  }, [content]);

  // useEffect(() => {
  //   getWeather();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <h1>Hästkollen</h1>
        <Image
          source={require("./img/meshHorse.png")}
          style={styles.horseLogo}
        />
        <MainComponent menuFunction={setContent} />
        <View>{displayingContent}</View>
        <h5>Dagens väder:</h5>
      </View>
    </View>
  );
};

export default App;
