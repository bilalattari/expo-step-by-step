import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { View } from "react-native";
import { RootState } from "@/store/store";
import { changeTheme } from "@/store/features/themeSlice";
import { Colors } from "@/constants/Colors";

export default function ChangeTheme() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  const dispatch = useDispatch();

  const txtColor = Colors[theme].text;
  const backgroundColor = Colors[theme].background;
  const btnTxt = Colors[theme].btnTxt;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        gap: 20,
        backgroundColor: backgroundColor,
      }}
    >
      <ThemedText style={{ textAlign: "center", color: txtColor }} type="title">
        Change Theme App
      </ThemedText>
      <ThemedButton
        onPress={() => dispatch(changeTheme())}
        txtColor={btnTxt}
        bgColor={theme == "light" ? "purple" : "#fff"}
        txt="Change Theme"
      />
    </View>
  );
}
