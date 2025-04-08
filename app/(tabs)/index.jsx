import { StyleSheet, Text, View, Platform } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Page</Text>
      <Link href="/about">
        <Text style={styles.link}>Go to About Page</Text>
      </Link>
      <Link href="/contact">
        <Text style={styles.link}>Go to Contact Page</Text>
      </Link>

      {Platform.OS !== "web" && (
        <>
          <Link style={styles.link} href="/users/1">
            View first user details
          </Link>
          <Link style={styles.link} href="/users/2">
            View second user details
          </Link>
        </>
      )}
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
