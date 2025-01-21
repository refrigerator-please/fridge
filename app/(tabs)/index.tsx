import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>1월 22일</Text>
      </View>
      <ScrollView style={styles.main}></ScrollView>
    </SafeAreaView>
  );
}

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
    borderRadius: 24,
    backgroundColor: "#489ECD10",
  },
});
