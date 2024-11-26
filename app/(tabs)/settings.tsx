import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { View } from "react-native";

export default function Settings() {
  return (
    <View style={{ flex: 1 }}>
      <ThemedText type="title" align="center">
        Settings Page
      </ThemedText>
    </View>
  );
}
