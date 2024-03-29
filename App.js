import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  Platform
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";

const App = () => {
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const onPress = () => setCount(count + 1);

  const openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert("Persision to acces camera is required");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === "true") {
      return;
    }
    if (Platform.OS=="web") {
      
    }
    else {
      const uri = pickerResult.assets[0].uri;
      setSelectedImage({ localUri: uri });
    }
  };

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      walert(`Sharing is not available on your platform`);
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Pick an Image</Text>
        <Text style={styles.text}>With React Native</Text>
      </View>
      <View>
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Image
            source={{
              uri:
                selectedImage !== null
                  ? selectedImage.localUri
                  : "https://fastly.picsum.photos/id/299/200/200.jpg?hmac=ZG5bph3-p62DMNC1tvpW85v7Pd_rR1MCI-_elkQlG7M",
            }}
            style={[styles.image, styles.city]}
          />
        </TouchableOpacity>
        {selectedImage && (
          <View
            style={
              selectedImage ? styles.buttonsContainer : styles.buttonContainer
            }
          >
            <TouchableOpacity style={styles.button} onPress={openShareDialog}>
              <Text style={styles.buttonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => setSelectedImage(null)}
            >
              <Text style={styles.buttonText2}>Reset</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.counterContainer}>
        <Button
          title={`Count:${count}`}
          color="coral"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => Alert.alert(`Touchable Added ${count} times.`)}
        />
        <TouchableOpacity style={styles.touchable} onPress={onPress}>
          <Text>Add to the counter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkslategrey",
    gap: 25,
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "aliceblue",
  },
  text: {
    fontSize: 18,
    color: "coral",
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
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 50,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 50,
    marginTop: 5,
  },
  button: {
    backgroundColor: "aliceblue",
    padding: 9,
    borderRadius: 5,
  },
  buttonText: {
    color: "coral",
    fontWeight: "bold",
    fontSize: 16,
  },
  button2: {
    backgroundColor: "dimgrey",
    padding: 9,
    borderRadius: 5,
  },
  buttonText2: {
    color: "aliceblue",
    fontWeight: "bold",
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: "column",
    gap: 5,
    marginTop: 15,
  },
  touchable: {
    padding: 1,
  },
});
