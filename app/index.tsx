// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Thivanka</Text>
//     </View>
//   );
// }

import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router"; // navigate to another page

const LANGUAGES = [
  { code: "si", label: "සිංහල" },
  { code: "ta", label: "தமிழ்" },
  { code: "en", label: "English" },
];

export default function Index() {
  const router = useRouter();

  function handleSelectLanguage(code: string) {
    if (code === "en") {
      // go to your next screen
      router.push("/Screens/home");
    } else {
      console.log("Selected", code);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* grey background area */}
      <View style={styles.background} />

      {/* bottom sheet */}
      <View style={styles.bottomSheet}>
        {/* small drag handle */}
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>

        <Text style={styles.title}>Select Language</Text>

        {LANGUAGES.map(lang => (
          <TouchableOpacity
            key={lang.code}
            style={styles.languageButton}
            activeOpacity={0.8}
            onPress={() => 
              handleSelectLanguage(lang.code)}
          >
            <Text style={styles.languageText}>{lang.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", // matches splash white
  },
  background: {
    flex: 1,
    backgroundColor: "#cfcfcf", // light grey like in your design
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 32,
    backgroundColor: "#f9f1ff", // soft pink
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  handleContainer: {
    alignItems: "center",
    marginBottom: 8,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#999999",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  languageButton: {
    backgroundColor: "#d3d3d3",
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 8,
  },
  languageText: {
    fontSize: 16,
  },
});
