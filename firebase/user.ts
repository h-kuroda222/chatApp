import * as firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export const userLogin = async (
  mail: string,
  password: string,
  navigation: any
) => {
  console.log(mail);
  console.log(password);
  await firebase
    .auth()
    .signInWithEmailAndPassword(mail, password)
    .then(() => {
      navigation.navigate("Chat");
    })
    .catch(() => {
      Alert.alert("ログインできませんでした");
    });
};

export const userSignin = async (
  mail: string,
  password: string,
  navigation: any
) => {
  console.log(mail);
  console.log(password);
  await firebase
    .auth()
    .createUserWithEmailAndPassword(mail, password)
    .then(() => {
      navigation.navigate("Chat");
    })
    .catch(() => {
      Alert.alert("登録できませんでした");
    });
};
