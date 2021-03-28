import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/firestore";
import styled from "styled-components/native";
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { sendChatMessage } from "../../firebase/sendMessage";

type Message = {
  text: string;
  createdAt: firebase.firestore.Timestamp;
  userId: string;
};

const ChatScreen = () => {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);

  const getMessages = async () => {
    const messages: Message[] = [];
    await firebase
      .firestore()
      .collection("messages")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            messages.push(change.doc.data() as Message);
          }
          setMessages(messages);
        });
      });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <StyledContainer>
        <ExpoStatusBar style="light" />
        <KeyboardAvoidingView behavior="padding">
          <StyledChatWrap
            data={messages}
            inverted={true}
            renderItem={({ item }: { item: Message }) => (
              <StyledChatText>{item.text}</StyledChatText>
            )}
            keyExtractor={(_: any, index: number) => index.toString()}
          />
          <StyledInputContainer>
            <StyledInput
              onChangeText={(value: string) => {
                setText(value);
              }}
              value={text}
              placeholder="メッセージを入力してください"
              placeholderTextColor="#777"
            />
            <Button
              title="send"
              onPress={() => {
                sendChatMessage(text);
                setText("");
              }}
            />
          </StyledInputContainer>
        </KeyboardAvoidingView>
      </StyledContainer>
    </TouchableWithoutFeedback>
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

const StyledChatWrap = styled(FlatList)`
  width: 100%;
`;

const StyledChatText = styled(Text)`
  margin-top: 5px;
  font-size: 13px;
  color: #ffffff;
`;
