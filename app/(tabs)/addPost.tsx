import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemedButton } from "@/components/ThemedButton";
import * as ImagePicker from "expo-image-picker";

export default function AddPost() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    console.log("function called=>");
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
    console.log("cameraPermission=>", cameraPermission);
    if (cameraPermission.granted) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    }
    // No permissions request is necessary for launching the image library
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ["images", "videos"],
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // console.log(result);

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
  };

  return (
    <ThemedView style={{ flex: 1, padding: 20, gap: 20 }}>
      <TouchableOpacity onPress={pickImage} style={styles.imgPicker}>
        {image ? (
          <Image
            style={{ height: "100%", width: "100%" }}
            source={{ uri: image }}
          />
        ) : (
          <FontAwesome name="image" size={60} color="grey" />
        )}
      </TouchableOpacity>

      <TextInput placeholder="Title" style={styles.input} />
      <TextInput
        numberOfLines={6}
        multiline={true}
        textAlignVertical="top"
        placeholder="Description"
        style={[styles.input, { minHeight: 130 }]}
      />

      <ThemedButton mx={0} txt="Add Post" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  imgPicker: {
    height: 200,
    borderRadius: 7,
    borderStyle: "dashed",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    color: "black",
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginVertical: 7,
    fontSize: 20,
  },
});
