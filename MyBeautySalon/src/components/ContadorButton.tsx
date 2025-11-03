import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";

export default function ContadorButton() {
  const [contador, setContador] = useState<number>(0);

  useEffect(() => {
    console.log(`Contador actualizado: ${contador}`);
    if (contador !== 0 && contador % 5 === 0) {
      console.log("Ha alcanzado un multiplo de 5");
    }
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.value}>Contador: {contador}</Text>
      <CustomButton
        title="Incrementar"
        onPress={() => setContador((prev) => prev + 1)}
      />
      <CustomButton
        title="Resetear"
        variant="secondary"
        onPress={() => setContador(0)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    gap: 12,
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
  },
});
