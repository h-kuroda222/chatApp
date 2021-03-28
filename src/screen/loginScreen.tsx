import React, { useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  TextInput,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { InputText } from "../components/input";
import { userLogin } from "../../firebase/user";

const LoginScreen = ({ navigation }: any) => {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = async (mail: string, password: string) => {
    console.log(mail);
    console.log(password);
    await userLogin(mail, password, navigation);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <StyledContainer>
        <ExpoStatusBar style="light" />
        <KeyboardAvoidingView behavior="padding">
          <StyledInputContainer>
            <StyledInputText
              value={mail}
              placeholder="メールアドレスを入力してください"
              placeholderTextColor="#777"
              onChangeText={(value: string) => {
                setMail(value);
              }}
            />
            <StyledInputText
              onChangeText={(value: string) => {
                setPassword(value);
              }}
              value={password}
              placeholder="パスワードを入力してください"
              placeholderTextColor="#777"
            />
          </StyledInputContainer>
          <Button
            title="ログイン"
            onPress={() => {
              login(mail, password);
            }}
          />
          <Button
            title="ユーザー登録はこちら"
            onPress={() => {
              navigation.navigate("Signin");
            }}
          />
        </KeyboardAvoidingView>
      </StyledContainer>
    </TouchableWithoutFeedback>
  );
};

const StyledContainer = styled(SafeAreaView)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: #333;
`;

const StyledInputContainer = styled(View)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;

const StyledInputText = styled(TextInput)`
  margin-top: 20px;
  padding: 5px 10px;
  width: 300px;
  height: 35px;
  color: #fff;
  border: 1px solid #999;
  border-radius: 5px;
`;

export default LoginScreen;
