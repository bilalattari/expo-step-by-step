import {
  TouchableOpacity,
  type TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { ThemedText } from "./ThemedText";

export type ThemedButtonProps = TouchableOpacityProps & {
  txt?: string;
  bgColor?: string;
  txtColor?: string;
  my?: number;
};

export function ThemedButton({
  style,
  txt,
  bgColor,
  txtColor,
  my = 0,
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.default,
        my ? { marginVertical: my } : undefined,
        bgColor && { backgroundColor: bgColor },
        style,
      ]}
      {...rest}
    >
      <ThemedText
        type="defaultSemiBold"
        style={[{ color: txtColor ? txtColor : "#fff" }]}
      >
        {txt}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  default: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: "#009ce0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});
