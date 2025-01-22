import { Food } from "@/types/Food.type";
import dayjs from "dayjs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getDueDate } from "../model/food";

interface Props {
  food: Food;
}

const FoodCard = ({ food }: Props) => {
  const { dueDate } = getDueDate({ date: food.expireDate });

  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.wrapper}>
        <View style={{ gap: 12, flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.icon}>{food.icon}</Text>
          <Text style={styles.title}>{food.name}</Text>
        </View>
        <Text style={{ color: "#489ECD", fontWeight: 700 }}>
          {dueDate}일 남음
        </Text>
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 18,
    backgroundColor: "white",
  },
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
});
