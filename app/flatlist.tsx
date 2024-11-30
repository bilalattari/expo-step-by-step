import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Product } from "@/constants/Interface";
import { fetchProducts } from "@/store/features/productsSlice";
import { RootState } from "@/store/store";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";
//1.Vertical List
//2.Horizontal List
//3.Column wise list
//4.Pagination
//5.Pull to Refresh

export default function FlatlistLearning() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState<string>("all");
  const [limit, setLimit] = useState<number>(20);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [limit, chosenCategory]);

  async function getCategories() {
    let categories: any = await fetch(
      `https://dummyjson.com/products/categories`
    );
    categories = await categories.json();
    setCategories(categories);
  }

  async function getProducts() {
    let url =
      chosenCategory && chosenCategory != "all"
        ? `https://dummyjson.com/products/category/${chosenCategory}`
        : `https://dummyjson.com/products`;
    let products: any = await fetch(`${url}?limit=${limit}`);
    products = await products.json();
    setProducts(products.products);
    setTotal(products.total);
    setRefreshing(false);
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getProducts();
  }, []);

  console.log("products=>", products.length);
  console.log("categories=>", categories.length);
  console.log("total=>", total);

  return (
    <ThemedView style={{ flex: 1, padding: 10 }}>
      <FlatList
        style={{ flex: 1 }}
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ThemedView>
            <FlatList
              style={{ marginBottom: 20 }}
              data={[{ slug: "all", name: "All" }, ...categories]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 8 }}
              keyExtractor={(data) => data.slug}
              renderItem={({ item }) => {
                let isChosen = item.slug == chosenCategory;
                return (
                  <ThemedButton
                    activeOpacity={0.9}
                    onPress={() => setChosenCategory(item.slug)}
                    bgColor={isChosen ? "#000" : "#fff"}
                    txtColor={isChosen ? "#fff" : "#000"}
                    style={styles.chip}
                    txt={item.name}
                  />
                );
              }}
            />
          </ThemedView>
        }
        data={products}
        numColumns={2}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (limit < total) {
            setLimit(limit + 20);
          }
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        columnWrapperStyle={{ gap: 10 }}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => {
          return (
            <ThemedView style={styles.card}>
              <Image
                source={{ uri: item.thumbnail }}
                style={{ height: 150, resizeMode: "contain" }}
              />
              <View style={styles.info}>
                <ThemedText numberOfLines={1} type="subtitle">
                  {item.title}
                </ThemedText>
                {/* <ThemedText type="defaultSemiBold">{item.category}</ThemedText> */}
                <ThemedText type="default" numberOfLines={2}>
                  {item.description}
                </ThemedText>
              </View>
            </ThemedView>
          );
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  chip: {
    marginHorizontal: 0,
    borderColor: "grey",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  card: {
    padding: 5,
    flex: 1,
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
  },
  info: {
    padding: 5,
    gap: 5,
  },
});
