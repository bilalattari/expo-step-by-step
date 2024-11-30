import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

export default function Profile() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedText type="title">Profile Page</ThemedText>
    </ThemedView>
  );
}
