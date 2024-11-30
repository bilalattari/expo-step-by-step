import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  type TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import { ThemedText } from "./ThemedText";

export type ThemedButtonProps = TouchableOpacityProps & {
  bgColor?: string;
  txtColor?: string;
  my?: number;
  mx?: number;
  txt: string;
  icon?: ReactNode;
};

export const ThemedButton = ({
  bgColor,
  txtColor,
  my = 0,
  mx,
  txt = "Button",
  style,
  icon,
  ...rest
}: ThemedButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        bgColor && { backgroundColor: bgColor },
        mx != undefined ? { marginHorizontal: mx } : undefined,
        my ? { marginVertical: my } : undefined,
        style,
      ]}
      {...rest}
    >
      {icon && icon}
      <ThemedText style={{ color: txtColor ? txtColor : "#fff" }}>
        {txt}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    marginHorizontal: 20,
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#9900ef",
    borderRadius: 7,
  },
});
