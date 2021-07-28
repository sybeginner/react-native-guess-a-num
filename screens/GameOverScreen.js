import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import AppButton from "../components/AppButton";

import FontStyles from "../constants/fontstyles";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={FontStyles.title}>You win!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.successImage}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
      </View>
      <Text style={FontStyles.body}>Secret Number: {props.secretNumber}</Text>
      <Text style={FontStyles.body}>
        Number of guesses taken: {props.numGuess}
      </Text>
      <AppButton
        type="newGame"
        onPress={props.onRestart}
        style={styles.againButton}
      >
        Again
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  againButton: {
    marginVertical: 20,
  },
  imageContainer: {
    height: 300,
    width: 300,
    marginVertical: 20,
    borderRadius: 150,
    borderColor: Colors.black,
    overflow: "hidden",
    borderWidth: 1,
  },
  successImage: {
    height: "100%",
    width: "100%",
  },
});

export default GameOverScreen;
