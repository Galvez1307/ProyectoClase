import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PantallaCarga() {
  const [cargando, setCargando] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setCargando(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        {cargando ? "Cargando..." : "Bienvenido a la aplicaci\u00f3n"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: "600",
  },
});
