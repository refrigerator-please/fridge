import dayjs from "dayjs";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import FoodCard from "./FoodCard";
import { Food } from "@/types/Food.type";
import { Colors } from "@/constants/Colors";

const Home = () => {
  const today = dayjs();
  const month = today.month() + 1;
  const date = today.date();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>
          {month}월 {date}일
        </Text>
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
  container: { flex: 1, backgroundColor: "white" },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    color: "black",
  },
  date: {
    fontWeight: 600,
    fontSize: 20,
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
