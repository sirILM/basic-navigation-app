import { StyleSheet, Text, View } from "react-native";

export default function Address() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Address Page</Text>
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
