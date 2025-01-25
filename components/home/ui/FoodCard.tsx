import { Food } from "@/types/Food.type";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { 디데이정보_가져오기 } from "../model/food";
import { Colors } from "@/constants/Colors";

interface Props {
  food: Food;
}

const FoodCard = ({ food }: Props) => {
  const { 디데이_상태, 디데이, 상태색상 } = 디데이정보_가져오기({
    유효기간: food.expireDate,
  });

  return (
    <Pressable
      style={({ pressed }) => [
        {
          ...styles.pressable,
          backgroundColor: pressed ? Colors.light.gray100 : Colors.light.white,
        },
      ]}
    >
      <View style={{ gap: 12, flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.icon}>{food.icon}</Text>
        <Text style={styles.title}>{food.name}</Text>
      </View>
      <Text style={{ color: 상태색상, fontWeight: 700 }}>
        {디데이}일 {디데이_상태}
      </Text>
    </Pressable>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginVertical: 4,
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 18,
  },
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
});
