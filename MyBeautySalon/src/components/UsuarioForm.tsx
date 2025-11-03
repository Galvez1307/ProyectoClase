import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "./CustomInput";

type Usuario = {
  nombre: string;
  edad: string;
};

export default function UsuarioForm() {
  const [usuario, setUsuario] = useState<Usuario>({ nombre: "", edad: "" });
  const [edadError, setEdadError] = useState("");

  const handleNombreChange = (nombre: string) => {
    setUsuario((prev) => ({ ...prev, nombre }));
  };

  const handleEdadChange = (edad: string) => {
    const numericValue = edad.replace(/[^0-9]/g, "");
    setUsuario((prev) => ({ ...prev, edad: numericValue }));

    if (numericValue.length === 0) {
      setEdadError("La edad es obligatoria");
    } else {
      setEdadError("");
    }
  };

  const nombre = usuario.nombre || "invitado";
  const edad = usuario.edad || "...";
  const saludo = `Hola, ${nombre}. Tienes ${edad} a\u00f1os.`;

  return (
    <View style={styles.container}>
      <CustomInput
        value={usuario.nombre}
        placeholder="Nombre"
        onChange={handleNombreChange}
      />
      <CustomInput
        type="number"
        value={usuario.edad}
        placeholder="Edad"
        onChange={handleEdadChange}
        error={edadError}
      />
      <Text style={styles.message}>{saludo}</Text>
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
    fontSize: 16,
    fontWeight: "500",
  },
});
