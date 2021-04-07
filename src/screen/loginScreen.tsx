import React, { useState } from "react";
import "firebase/firestore";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
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

  const onChangeMail = (value: string) => {
    setMail(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
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
            <InputText
              value={mail}
              placeholder="メールアドレスを入力してください"
              placeholderTextColor="#777"
              onChange={(value: string) => {
                onChangeMail(value);
              }}
            />
            <InputText
              value={password}
              placeholder="パスワードを入力してください"
              placeholderTextColor="#777"
              onChange={(value: string) => {
                onChangePassword(value);
              }}
            />
          </StyledInputContainer>
          <Button
            title="ログイン"
            onPress={() => {
              login(mail, password);
            }}
          />
          <View style={{ marginTop: 15 }}>
            <Button
              title="ユーザー登録はこちら"
              onPress={() => {
                navigation.navigate("Signin");
              }}
            />
          </View>
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

export default LoginScreen;
