import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Modal,
  Button,
} from "react-native";
import InputNumber from "../components/InputNumber";
import Colors from "../constants/colors";
import AppButton from "../components/AppButton";
import NumberContainer from "../components/NumberContainer";
import FontStyles from '../constants/fontstyles';

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const numberInputHandler = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const selected = enteredNumber;
    if (isNaN(selected) || selected <= 0 || selected > 99) {
      Alert.alert("Invalid number", "Number must be between 1 - 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }
    setConfirmed(true);
    setShowModal(true);
  };

  const cancelModalHandler = () => {
    setConfirmed(false);
    setShowModal(false);
  };
  
  const confirmModalHandler = () => {
      setShowModal(false);
      props.onStartGame(enteredNumber);
  };

  let confirmedModal;
  let overlay;

  if (confirmed) {
    confirmedModal = (
      <Modal animationType="slide" visible={confirmed} transparent={true}>
        <View style={styles.confirmModal}>
          <Text style={FontStyles.body}>You have selected:</Text>
         <NumberContainer>{enteredNumber}</NumberContainer>
          <View style={styles.confirmModalButton}>
            <Button title="Cancel" color="grey" onPress={cancelModalHandler} />
            <AppButton type="confirm" style={styles.startButton} onPress={confirmModalHandler}>Start Game!</AppButton>
          </View>
        </View>
      </Modal>
    );

    overlay = <View key="overlay" style={styles.overlay}></View>;
  }

  return [
    <TouchableWithoutFeedback key="touchable" onPress={() => Keyboard.dismiss()}>
      <View style={styles.startGameScreen}>
        <Text style={{...styles.startGameText, ...FontStyles.title}}>Start new game!</Text>
        <InputNumber
          onInput={numberInputHandler}
          enteredNumber={enteredNumber}
          onReset={resetInputHandler}
          onConfirm={confirmInputHandler}
        ></InputNumber>
        {confirmedModal}
      </View>
    </TouchableWithoutFeedback>,
    overlay,
  ];
};

const styles = StyleSheet.create({
  startGameScreen: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
    alignItems: "center",
  },
  startGameText: {
    paddingBottom: 20,
  },
  confirmModal: {
    marginVertical: 200,
    marginHorizontal: 50,
    backgroundColor: Colors.white,
    justifyContent: "space-between",
    alignItems: "center",
    height: 220,
    borderRadius: 10,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: Colors.grey,
    shadowOpacity: 0.5,
    padding: 20,
  },
  confirmModalButton: {
    justifyContent: "center",
    width: '100%',
    alignItems: 'center',
  },
  startButton: {
      width: 150,
  },
  overlay: {
    backgroundColor: Colors.black,
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    opacity: 0.4,
  },
});

export default StartGameScreen;
