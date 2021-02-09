import firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

const getMassageRef = async () => {
  return await firebase.firestore().collection("messages").doc();
};

export const sendChatMessage = async (value: string) => {
  if (value != "") {
    const docRef = await getMassageRef();
    const message = {
      text: value,
      createdAt: firebase.firestore.Timestamp.now(),
      userId: "",
    };
    await docRef.set(message);
  } else {
    Alert.alert("メッセージを入力してください");
  }
};
