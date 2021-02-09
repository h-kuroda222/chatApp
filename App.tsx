import React from "react";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from "./firebase/config";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatScreen from "./src/screen/chatScreen";

firebase.initializeApp(firebaseConfig);

const App = () => {
  return <ChatScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
