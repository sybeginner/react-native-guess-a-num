import React, { useState, useRef, useEffect } from "react";

import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import AppButton from "../components/AppButton";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import FontStyles from "../constants/fontstyles";

const generateRandBetween = (min, max, exclude) => {
  const generated = Math.floor(Math.random() * (max - min) + min);
  const randomNum = generated;
  return randomNum === exclude
    ? generateRandBetween(min, max, exclude)
    : randomNum;
};

const GameScreen = (props) => {
  const initialGuess = generateRandBetween(1, 100, props.secretNumber);
  const [guess, setGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { secretNumber, onGameOver } = props;

  useEffect(() => {
    if (guess === secretNumber) {
      onGameOver(rounds);
    }
  }, [guess, secretNumber, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && props.secretNumber > guess) ||
      (direction === "greater" && props.secretNumber < guess)
    ) {
      Alert.alert("Don't lie", "You trying to be funny?", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") currentHigh.current = guess;
    if (direction === "greater") currentLow.current = guess + 1;

    const nextGuess = generateRandBetween(
      currentLow.current,
      currentHigh.current,
      guess
    );
    setGuess(nextGuess);
    setRounds((currRounds) => currRounds + 1);
    setPastGuesses((currPastGuess) => [nextGuess, ...currPastGuess]);
  };

  const renderListItem = (item) => {
    return (
      <Text key={item} style={styles.listItem}>
        {item}
      </Text>
    );
  };

  return (
    <View style={styles.screen}>
      <Text>Computer's guess:</Text>
      <NumberContainer>{guess}</NumberContainer>
      <Card>
        <View style={styles.buttonContainer}>
          <AppButton
            type="lower"
            onPress={nextGuessHandler.bind(this, "lower")}
          >
            <Ionicons name="md-remove" size={24} color="white"></Ionicons>
          </AppButton>
          <AppButton
            type="greater"
            onPress={nextGuessHandler.bind(this, "greater")}
          >
            <Ionicons name="md-add" size={24} color="white"></Ionicons>
          </AppButton>
        </View>
      </Card>

      <View style={styles.listView}>
        <View style={styles.listText}>
          <Text styles={FontStyles.title}>
            Past Guesses:
          </Text>
        </View>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess) => renderListItem(guess))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  listText: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  listView: {
    paddingTop: 20,
    flex: 1,
    width: "30%",
  },
  list: {
    alignItems: "center",
  },
  listItem: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: Colors.white,
    color: Colors.black,
    overflow: "hidden",
    width: '100%',
    textAlign: "center",
    marginVertical: 10,
    height: 50,
    lineHeight: 45,
  },
});

export default GameScreen;
