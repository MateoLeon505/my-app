import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import OrangeDiamond from './assets/orangeDiamondStone.png'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>First Project</Text>
        <Text style={styles.text}>Using React Native</Text>
      </View>
      <Image
          source={{uri: 'https://fastly.picsum.photos/id/299/200/200.jpg?hmac=ZG5bph3-p62DMNC1tvpW85v7Pd_rR1MCI-_elkQlG7M'}}
          style={[styles.image, styles.city]}>
      </Image>
      {/* <View style={styles.imgContainer}>
      🦆
        <Image
          source={OrangeDiamond}
          style={styles.image}>
        </Image>
      </View> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202020",
    gap: 25
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#f0f8ff"
  },
  text: {
    fontSize: 18,
    color: "coral"
  },
  imgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  image: {
    height: 200,
    width: 200,
  },
  city: {
    borderRadius: 100,
  }
});
