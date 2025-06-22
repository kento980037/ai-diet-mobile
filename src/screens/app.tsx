import { StyleSheet, type ImageSourcePropType, View } from "react-native";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { ImageViewer } from "@/components/image-viewer";
import { Button } from "@/components/button";

const PlaceholderImage =
  require("@/assets/images/background-image.png") as ImageSourcePropType;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="写真を選択" theme="primary" />
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
