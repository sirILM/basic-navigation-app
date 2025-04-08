import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Contact Page</Text>

      <Link
        href={{
          pathname: "contact/users/[id]",
          params: { id: 1 },
        }}
      >
        View user details
      </Link>
      <Link
        href={{
          pathname: "contact/users/[id]",
          params: { id: 2 },
        }}
      >
        View user details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: 10,
    color: "blue",
  },
});
