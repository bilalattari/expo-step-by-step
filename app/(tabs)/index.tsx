import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Category, Product } from "@/constants/Interfaces";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  RefreshControl,
  useColorScheme,
} from "react-native";

export default function Home() {
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [chosenCategory, setChosenCategory] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(30);
  const [skip, setSkip] = useState(0);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [chosenCategory, skip, limit, refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
  }, []);

  const getCategories = useCallback(async () => {
    let categories: any = await fetch(
      "https://dummyjson.com/products/categories"
    );
    categories = await categories.json();
    setCategories(categories);
  }, []);

  const getProducts = async () => {
    // console.log("chosenCategory=>", chosenCategory);
    setLoading(true);
    let url = chosenCategory
      ? `https://dummyjson.com/products/category/${chosenCategory}`
      : `https://dummyjson.com/products`;
    let products: any = await fetch(`${url}/?limit=${limit}`);
    products = await products.json();
    setProducts(products?.products);
    setTotal(products?.total);
    setLoading(false);
    setRefreshing(false);
  };

  console.log("products=>", limit, products.length, total);
  const theme = useColorScheme() || "light";

  return (
    <ThemedView style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={"black"}
          style={{
            alignSelf: "center",
            position: "absolute",
            width: "100%",
            marginVertical: 20,
          }}
        />
      ) : null}

      <FlatList
        data={products}
        stickyHeaderIndices={[0]}
        keyExtractor={(data) => `${data.id}`}
        numColumns={2}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        columnWrapperStyle={{ margin: 10, gap: 10 }}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (products.length < total) {
            setLimit(limit + 20);
          }
        }}
        ListHeaderComponent={
          <FlatList
            data={categories}
            horizontal={true}
            style={{
              padding: 10,
              backgroundColor:
                Colors[theme].background,
            }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(data) => data.slug}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => {
              const isChosen = chosenCategory == item.slug;
              return (
                <TouchableOpacity
                  style={[
                    styles.chip,
                    isChosen && { backgroundColor: "black" },
                  ]}
                  onPress={() => setChosenCategory(item.slug)}
                >
                  <ThemedText style={{ color: isChosen ? "#fff" : "#000" }}>
                    {item.name}
                  </ThemedText>
                </TouchableOpacity>
              );
            }}
          />
        }
        renderItem={({ item }) => {
          return (
            <View style={[styles.card, { borderColor: Colors[theme].text }]}>
              <Image source={{ uri: item.thumbnail }} style={styles.cardimg} />
              <View style={{ flex: 1, padding: 12 }}>
                <ThemedText type="defaultSemiBold" numberOfLines={1}>
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    flex: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
  },
  cardimg: { height: 120, resizeMode: "contain" },
  chip: {
    padding: 10,
    paddingHorizontal: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
});
