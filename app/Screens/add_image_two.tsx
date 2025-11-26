//image 2
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

export default function image2() {

    const router = useRouter();
    const [language, setLanguage] = React.useState("en");

    function handlePrevious() {
        router.push('./home');        // or router.push("/previousScreen");
    }

    function handleNext() {
        router.push("./add_image_three");  // or whatever your next route is
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
              // later: hook into your i18n logic here
            }}
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>Add Image 2</Text>

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

        {/* Bottom PREVIOUS / NEXT buttons */}
        <View style={styles.bottomArea}>
            <TouchableOpacity
                style={styles.navButton}
                activeOpacity={0.8}
                onPress={handlePrevious}   // router.back() or another screen
            >
                <Text style={styles.navButtonText}>PREVIOUS</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navButton}
                activeOpacity={0.8}
                onPress={handleNext}       // the NEXT navigation you already wrote
            >
                <Text style={styles.navButtonText}>NEXT</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 24,
  },
  navButton: {
    flex: 1,
    height: 48,
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },  
});
