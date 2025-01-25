import { Colors } from "@/constants/Colors";
import { Food } from "@/types/Food.type";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FoodCard from "./FoodCard";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>Fridge</Text>
      </View>
      <View style={styles.main}>
        <FlatList
          data={foodList}
          renderItem={({ item }: { item: Food }) => <FoodCard food={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", gap: 12 },
  header: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginHorizontal: 12,
    paddingHorizontal: 12,
    width: "100%",
    color: "black",
  },
  date: {
    color: Colors.light.primary900,
    fontWeight: 700,
    fontSize: 24,
    height: 32,
  },
  main: {
    flex: 1,
    marginHorizontal: 12,
    padding: 16,
    borderRadius: 24,
    backgroundColor: Colors.light.background.primary10,
  },
});

const foodList = [
  { icon: "🍌", name: "롯데마트에서 산 빠나나", expireDate: "2025-01-24" },
  { icon: "🎂", name: "홈베이킹 초코케이쿠🍫", expireDate: "2025-01-29" },
  { icon: "🍕", name: "냉동 피자", expireDate: "2025-03-01" },
  { icon: "🍖", name: "설로인 고기", expireDate: "2025-02-01" },
];
