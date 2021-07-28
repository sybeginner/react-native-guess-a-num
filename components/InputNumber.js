import React from "react";

import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "./Card";
import Colors from "../constants/colors";
import Input from "./Input";
import AppButton from "./AppButton";
import FontStyles from '../constants/fontstyles';

const InputNumber = (props) => {
  return (
    <Card style={{ borderRadius: 10 }}>
      <View style={styles.inputNumberContainer}>
        <Text style={FontStyles.body}>Input your number</Text>
        <Input
          style={styles.inputBox}
          placeholder="99"
          textAlign="center"
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={props.onInput}
          value={props.enteredNumber}
        ></Input>
        <View style={styles.buttonsContainer}>
          <AppButton type="cancel" onPress={props.onReset}>Reset</AppButton>
          <AppButton type="confirm" onPress={props.onConfirm}>Confirm</AppButton>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  inputNumberContainer: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    padding: 10,
    height: 50,
    width: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginHorizontal: 10,
    width: 90,
  },
  cancelButton: {
    backgroundColor: Colors.reset,
  },
  confirmButton: {
    backgroundColor: Colors.teal,
  },
});

export default InputNumber;
