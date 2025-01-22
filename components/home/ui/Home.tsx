import dayjs from "dayjs";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FoodCard from "./FoodCard";

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
        <ScrollView contentContainerStyle={styles.scrollView}>
          {foodList
            .concat(foodList)
            .concat(foodList)
            .concat(foodList)
            .concat(foodList)
            .map((food) => (
              <FoodCard food={food} />
            ))}
        </ScrollView>
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
    margin: 12,
    padding: 16,
    borderRadius: 24,
    backgroundColor: "#489ECD10",
  },
  scrollView: {
    flex: 1,
    flexDirection: "column",
    rowGap: 8,
  },
});

const foodList = [
  { icon: "🍌", name: "컬리에서 산 빠나나", expireDate: "2025-01-24" },
  { icon: "🧇", name: "맛나 호떡", expireDate: "2025-01-29" },
  { icon: "🍕", name: "냉동 피자", expireDate: "2025-03-01" },
];
