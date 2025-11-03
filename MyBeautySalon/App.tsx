import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ContadorButton from "./src/components/ContadorButton";
import PantallaCarga from "./src/components/PantallaCarga";
import RelojDigital from "./src/components/RelojDigital";
import UsuarioForm from "./src/components/UsuarioForm";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.card}>
        <Text style={styles.title}>My Beauty Salon</Text>
        <UsuarioForm />
        <ContadorButton />
        <RelojDigital />
        <PantallaCarga />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    paddingVertical: 40,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 35,
    paddingHorizontal: 24,
    width: "88%",
    maxWidth: 420,
    alignItems: "center",
    gap: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
  },
});
