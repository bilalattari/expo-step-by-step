import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Modal, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as ImagePicker from "expo-image-picker";

const imagesArr = [
  "https://images.unsplash.com/photo-1566679056462-2075774c8c07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW5zfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1729556227126-452c221f1ef4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1516470047996-b6dde636095f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW5zfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1670414701148-16ac8873a150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1519743521-6d60422a9c2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1600298882525-1ac025c98b68?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1600298882283-40b4dcb8b211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D",
];
export default function LearningImagePicker() {
  const [images, setImages] = useState<string[]>(imagesArr);
  const [showModal, setShowModal] = useState<boolean>(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 2],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImages([result.assets[0].uri, ...images]);
      setShowModal(false);
    }
  };

  const pickImageFromCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) return;
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      //   aspect: [4, 2],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImages([result.assets[0].uri, ...images]);
      setShowModal(false);
    }
    // No permissions request is necessary for launching the image library
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <Modal transparent visible={showModal}>
        <View style={styles.modalContainer}>
          <ThemedView style={styles.modalPopup}>
            <ThemedText type="title" align="center">
              Pick Image From
            </ThemedText>

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Entypo
                style={styles.icon}
                name="image"
                size={41}
                color="black"
                onPress={pickImage}
              />
              <Entypo
                style={styles.icon}
                name="camera"
                size={41}
                color="black"
                onPress={pickImageFromCamera}
              />
            </View>

            <ThemedButton
              txt="Cancel"
              bgColor="#000"
              txtColor="#fff"
              onPress={() => setShowModal(false)}
              style={{ width: 100, alignSelf: "center" }}
            />
          </ThemedView>
        </View>
      </Modal>
      <ThemedButton
        txt="Add Image"
        icon={<Entypo name="image" size={24} color="white" />}
        style={styles.addImg}
        onPress={() => setShowModal(true)}
      />
      <FlatList
        data={images}
        keyExtractor={(data, index) => index.toString()}
        contentContainerStyle={{ marginHorizontal: 10 }}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.img} />;
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  addImg: { width: 140, alignSelf: "flex-end", marginVertical: 10 },
  img: {
    // aspectRatio: 3 / 2,
    width: "100%",
    alignSelf: "center",
    resizeMode: "cover",
    height: 200,
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  icon: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: "#EDF0F4",
  },
  modalPopup: {
    height: 300,
    width: 300,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
});
