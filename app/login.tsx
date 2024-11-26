import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <ThemedText type="title" align="center">
        Login to Continue
      </ThemedText>

      <ThemedButton
        onPress={() => router.push("/(tabs)")}
        bgColor="#c1e1c5"
        txtColor="#194d33"
        my={10}
        txt="Go to Home Page"
      />
    </View>
  );
}
