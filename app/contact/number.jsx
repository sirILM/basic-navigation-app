import { StyleSheet, Text, View } from "react-native";

export default function Number() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Number Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
