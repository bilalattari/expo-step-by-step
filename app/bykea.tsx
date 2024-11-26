import "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export default function Bykea() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="black" />
        <Text style={styles.headerTxt}>BYKEA</Text>
        <MaterialIcons name="add-call" size={24} color="black" />
      </View>

      {/* banner image view */}

      <View style={styles.bannerImgView}>
        <Image
          style={styles.bannerImg}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlehOF0EnLGJDTPc3TrBz93V25TIul_sNrQ&s",
          }}
        />
      </View>

      {/* info View */}

      <View style={styles.infoView}>
        <MaterialIcons name="attach-money" size={24} color="green" />
        <MaterialIcons name="message" size={24} color="green" />
      </View>

      {/* bottom container */}

      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor={"#c1e1c5"} />
          <Card title={"Ride"} icon={"bike-scooter"} bgColor={"#bedadc"} />
        </View>
        <View style={styles.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor={"#c1e1c5"} />
          <Card title={"Ride"} icon={"bike-scooter"} bgColor={"#bedadc"} />
        </View>
        <View style={styles.row}>
          <Card title={"Carpool"} icon={"electric-car"} bgColor={"#c1e1c5"} />
          <Card title={"Ride"} icon={"bike-scooter"} bgColor={"#bedadc"} />
        </View>
      </View>
    </View>
  );
}

const Card = ({
  bgColor,
  icon,
  title,
}: {
  bgColor: string;
  icon: any;
  title: string;
}) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={{ textAlign: "right" }}>{title}</Text>
      <MaterialIcons name={icon} size={70} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTxt: {
    fontWeight: "bold",
    letterSpacing: 3,
    fontSize: 21,
  },
  header: {
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  bannerImgView: {
    height: SCREEN_HEIGHT / 3.7,
    backgroundColor: "#DEE3E8",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  bannerImg: {
    height: "86%",
    borderRadius: 12,
  },
  infoView: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    marginTop: -15,
    marginHorizontal: 20,
  },
  bottomContainer: { flex: 1, margin: 20, gap: 15 },
  row: { flex: 1, flexDirection: "row", gap: 15 },
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    justifyContent: "space-between",
  },
});
