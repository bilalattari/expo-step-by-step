import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";
import React from "react";
import { Alert, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ThemedText type="title" align="center">
        Welcome to Our Tutorial
      </ThemedText>

      <ThemedButton
        my={10}
        onPress={() => Alert.alert("Clicked ON Google Login")}
        bgColor="#fff"
        txtColor="#000"
        icon={<FontAwesome name="google" size={20} color="black" />}
        style={{ elevation: 1 }}
        txt="Continue with Google"
      />
      <ThemedButton
        icon={<FontAwesome name="apple" size={20} color="#fff" />}
        bgColor="#000"
        my={10}
        txt="Continue with Apple"
      />
      <ThemedButton bgColor="#000" my={10} txt="Continue with X" />
      <ThemedButton my={10} txt="Login to Continue" />
    </View>
  );
}
