import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ThemedText type="title" align="center">
        Welcome Sreen
      </ThemedText>

      <ThemedButton
        my={10}
        onPress={() => router.push("/login")}
        txt="Login to Continue"
      />
    </View>
  );
}
