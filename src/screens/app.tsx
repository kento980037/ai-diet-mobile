import { useState, FC } from "react";
import { StyleSheet, type ImageSourcePropType, View } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { ImageViewer } from "@/components/image-viewer";
import { Button } from "@/components/button";
import * as ImagePicker from "expo-image-picker";

const PlaceholderImage =
  require("@/assets/images/background-image.png") as ImageSourcePropType;

const App: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button label="写真を選択" theme="primary" onPress={pickImageAsync} />
        <Button label="この写真を使用" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292d",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

registerRootComponent(App);
