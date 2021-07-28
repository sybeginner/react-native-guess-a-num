import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import GameOverScreen from "./screens/GameOverScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [chosenNumber, setChosenNumber] = useState();
  const [numGuess, setNumGuess] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const startGameHandler = (choice) => {
    setChosenNumber(+choice);
  };

  const gameOverHandler = (rounds) => {
    setNumGuess(rounds);
  };

  const restartHandler = () => {
    setNumGuess(0);
    setChosenNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (chosenNumber && numGuess <= 0) {
    content = (
      <GameScreen secretNumber={chosenNumber} onGameOver={gameOverHandler} />
    );
  } else if (numGuess > 0) {
    content = (
      <GameOverScreen
        numGuess={numGuess}
        secretNumber={chosenNumber}
        onRestart={restartHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number!"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
