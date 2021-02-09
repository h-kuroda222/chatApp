import React, { useState } from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, Text, TextInput, Button } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { sendChatMessage } from "./../../service/sendMessage";

const ChatScreen = () => {
  const [text, setText] = useState<string>("");
  return (
    <StyledContainer>
      <ExpoStatusBar style="light" />
      <Text>ChatScreen</Text>
      <StyledInputContainer>
        <StyledInput
          onChangeText={(value: string) => {
            setText(value);
          }}
          value={text}
          placeholder="メッセージを入力してください"
          placeholderTextColor="#777"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="done"
        />
        <Button
          title="send"
          onPress={() => {
            sendChatMessage(text);
          }}
        />
      </StyledInputContainer>
    </StyledContainer>
  );
};

export default ChatScreen;

const StyledContainer = styled(SafeAreaView)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 100%;
  background-color: #333;
`;

const StyledInputContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  width: 100%;
`;

const StyledInput = styled(TextInput)`
  padding: 5px 10px;
  width: 85%;
  height: 35px;
  color: #fff;
  border: 1px solid #999;
  border-radius: 5px;
`;
