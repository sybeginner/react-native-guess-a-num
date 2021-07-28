import React from "react";

import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const AppButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={{ ...styles.button, ...styles[props.type], ...props.style }}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    width: 100,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: Colors.orange,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontFamily: "open-sans",
    textAlign: 'center',
  },
  cancel: {
    backgroundColor: Colors.reset,
  },
  confirm: {
    backgroundColor: Colors.teal,
  },
  lower: {
    backgroundColor: Colors.brown,
  },
  greater: {
    backgroundColor: Colors.indigo,
  },
  newGame: {
    backgroundColor: Colors.orange,
  },
});

export default AppButton;
