import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <View
      // style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}
      style={styles.container}
    >
      <Text style={styles.bigText}>First Project</Text>
      <Text style={styles.text}>Using React Native👾</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bigText: {
    fontSize: 40,
  },
  text: {
    fontSize: 30,
  },
});
