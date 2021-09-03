// import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import MainComponent from "./Components/MainComponent";
import DiaryComponent from "./Components/DiaryComponent";
import FeedComponent from "./Components/FeedComponent";
import AppointmentComponent from "./Components/AppointmentComponent";

const App = () => {
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
    spaceView: {
      height: 200,
      width: 260,
      margin: 10,
      padding: 10,
    },
  });
  const [content, setContent] = useState("default");
  const [displayingContent, setDisplayingContent] = useState(null);
  const [getWeather, setGetWeather] = useState(null);

  function showWeather() {
    let url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.068580/lat/59.329323/data.json`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setGetWeather(json.timeSeries[2].parameters[10].values[0]);
      })
      .catch((error) => {
        console.error("Error ", error);
      });
  }

  useEffect(() => {
    showWeather();
  }, []);

  function displayContent(checkContent) {
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
        setDisplayingContent(<View style={styles.spaceView} />);
    }
  }

  useEffect(() => {
    displayContent(content);
  }, [content]);

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
        <View>
          <h5>
            Nuvarande temperatur: {getWeather}°C
          </h5>
        </View>
      </View>
    </View>
  );
};

export default App;
