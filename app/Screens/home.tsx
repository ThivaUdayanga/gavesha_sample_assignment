import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import LanguageSelector from "./../components/language_selector";

export default function Home() {

  const router = useRouter();
  const [language, setLanguage] = React.useState("en");

  function handleNext() {
    router.push("./add_image_two")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.headerRow}>
          <LanguageSelector
            value={language}
            onChange={code => {
              setLanguage(code);
              console.log("Language changed to", code);
            }}
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>Add Image 1</Text>

        {/* Big image placeholder */}
        <TouchableOpacity
          style={styles.imagePlaceholder}
          activeOpacity={0.8}
          onPress={() => {
            console.log("Select image from gallery");
          }}
        >
          <View style={styles.imageIconBox} />
          <Text style={styles.imageText}>Select image from gallery</Text>
        </TouchableOpacity>

        {/* Bottom NEXT button */}
        <View style={styles.bottomArea}>
          <TouchableOpacity
            style={styles.nextButton}
            activeOpacity={0.8}
            onPress={handleNext}     
          >
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  headerRow: {
    alignItems: "flex-end",
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#b0b0b0",
    backgroundColor: "#f5f5f5",
  },
  languageText: {
    fontSize: 14,
    marginRight: 4,
  },
  languageCaret: {
    fontSize: 12,
  },
  title: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "500",
  },
  imagePlaceholder: {
    flexGrow: 1,
    backgroundColor: "#dedede",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imageIconBox: {
    width: 40,
    height: 40,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#a0a0a0",
    marginBottom: 8,
  },
  imageText: {
    fontSize: 14,
    color: "#666666",
  },
  bottomArea: {
    marginTop: 16,
    marginBottom: 24,
  },
  nextButton: {
    height: 48,
    borderRadius: 12,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
