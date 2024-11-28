import { ThemedText } from "@/components/ThemedText";
import { Product } from "@/constants/Interface";
import { fetchProducts } from "@/store/features/productsSlice";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function FlatlistLearning() {
  const { products, status } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (status == "pending") {
    return (
      <ActivityIndicator
        size={"large"}
        style={{
          alignSelf: "center",
          marginVertical: 20,
        }}
      />
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={products}
        keyExtractor={(data: Product) => `${data.id}`}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ marginHorizontal: 10 }}
        renderItem={({ item, index }: { item: Product; index: number }) => {
          return (
            <View
              key={index}
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: "#ccc",
                marginBottom: 10,
                borderRadius: 8,
              }}
            >
              <Image
                source={{ uri: item.thumbnail }}
                style={{ height: 200, resizeMode: "cover" }}
              />
              <View style={{ padding: 10, gap: 6 }}>
                <ThemedText type="subtitle" numberOfLines={1}>
                  {item.title}
                </ThemedText>
                <ThemedText type="default" numberOfLines={2}>
                  {item.description}
                </ThemedText>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
