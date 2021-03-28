import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseConfig } from "./firebase/config";
import ChatScreen from "./src/screen/chatScreen";
import LoginScreen from "./src/screen/loginScreen";
import SigninScreen from "./src/screen/signinScreen";

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: false,
        }}
        headerMode="none"
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
