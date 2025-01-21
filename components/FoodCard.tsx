import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FoodCard = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.wrapper}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.icon}>🍌</Text>
          <Text style={styles.title}>컬리에서 산 빠나나</Text>
        </View>
        <Text style={{ color: "#489ECD", fontWeight: 700 }}>1일 남음</Text>
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
