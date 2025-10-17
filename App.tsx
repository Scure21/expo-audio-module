import { useEventListener } from "expo";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpoAudioRouteModule, { AudioRoute } from "./modules/expo-audio-route";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AudioRoute>("unknown");

  useEventListener(ExpoAudioRouteModule, "onAudioRouteChange", ({ route }) => {
    setCurrentRoute(route);
  });

  useEffect(() => {
    // This will call getCurrentRouteAsync function we declared in the Swift/Kotlin code
    ExpoAudioRouteModule.getCurrentRouteAsync().then((route) => {
      setCurrentRoute(route);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text> Audio Route: {currentRoute}</Text>
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
});
