import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.chosenNumber}>
      <Text style={styles.chosenNumberText}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chosenNumber: {
    borderWidth: 2,
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: "center",
    borderColor: Colors.blue,
    shadowColor: Colors.teal,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    justifyContent: "center",
    marginVertical: 20,
  },
  chosenNumberText: {
    fontSize: 20,
    color: "blue",
  },
});

export default NumberContainer;
