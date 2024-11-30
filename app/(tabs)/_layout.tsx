import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard : true,
        tabBarActiveTintColor: "black",
        // tabBarStyle: {
        //   backgroundColor: "orange",
        // },
        // tabBarItemStyle : {borderColor : "#000" , borderWidth : 1}
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: "Courses",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="folder-open-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="addPost"
        options={{
          tabBarItemStyle: {
            flex: 0.6,
            backgroundColor: "blue",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            borderRadius: 12,
            // bottom : 25
          },
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="plus" color={"#fff"} />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "Posts",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="feed" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww",
              }}
              style={{ height: 25, width: 25, borderRadius: 125 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
