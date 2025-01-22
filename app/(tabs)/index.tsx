import FoodCard from "@/components/home/ui/FoodCard";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Home from "@/components/home/ui/Home";

dayjs.locale("ko");

export default function HomeScreen() {
  return <Home />;
}
