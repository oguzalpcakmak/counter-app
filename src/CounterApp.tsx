import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Counter from "./features/counter/Counter";
import LinkList from "./components/LearnReduxLinks";

export default function CounterApp() {
  return (
    <View style={styles.container}>
      <Header />
      <Counter />
      <LinkList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...(Platform.OS === "web" ? { alignItems: "center" } : {}),
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
