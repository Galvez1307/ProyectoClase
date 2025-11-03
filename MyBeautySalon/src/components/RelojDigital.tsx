import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString("es-ES", { hour12: false });
};

export default function RelojDigital() {
  const [hora, setHora] = useState<string>(() => formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(formatTime(new Date()));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{hora}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    width: "100%",
  },
  time: {
    fontSize: 24,
    fontWeight: "700",
    letterSpacing: 2,
  },
});
