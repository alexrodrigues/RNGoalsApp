import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>test</Text>
      <Button
        title="Click me"
        onPress={() => Alert.alert("Button Pressed", "You clicked the button!")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 16,
  },
});
