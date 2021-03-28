import React, { useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { InputText } from "../components/input";
import { userSignin } from "../../firebase/user";

const SigninScreen = ({ navigation }: any) => {
  const [mail, setMail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = async (mail: string, password: string) => {
    await userSignin(mail, password, navigation);
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
              onChangeText={(value: string) => {
                setMail(value);
              }}
              value={mail}
              placeholder="メールアドレスを入力してください"
              placeholderTextColor="#777"
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
            title="登録"
            onPress={() => {
              signUp(mail, password);
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

export default SigninScreen;
