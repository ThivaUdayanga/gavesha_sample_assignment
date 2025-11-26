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

    const router = useRouter()
    const [language, setLanguage] = React.useState("en")
    
    function handleEdit() {
        console.log('finish')  
    }

    function handleHome() {
        router.push("./add_image_three")
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        {/* Top header with Home + language selector */}
        <View style={styles.headerRow}>
            <TouchableOpacity
                style={styles.homeButton}
                activeOpacity={0.8}
                onPress={handleHome}
            >
                <Text style={styles.homeButtonText}>Home</Text>
            </TouchableOpacity>

          <LanguageSelector
            value={language}
            onChange={code => {
              setLanguage(code);
              console.log("Language changed to", code);
              // later: hook into your i18n logic here
            }}
          />
        </View>        

        {/* Showcase stacked cards (not scrollable) */}
        <View style={styles.showcaseStack}>
        <View style={[styles.showcaseCard, styles.cardBack]} />
        <View style={[styles.showcaseCard, styles.cardMiddle]} />
        <View style={[styles.showcaseCard, styles.cardFront]}>
            <View style={styles.imageIconBox} />
            <Text style={styles.imageText}>Select image from gallery</Text>
        </View>
        </View>

        {/* Edit button */}
        <View style={styles.bottomArea}>

            <TouchableOpacity
                style={styles.navButton}
                activeOpacity={0.8}
                onPress={handleEdit}
            >
                <Text style={styles.navButtonText}>Edit</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 115,
    },

homeButton: {
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 8,
  backgroundColor: "#e0e0e0",
},

homeButtonText: {
  fontSize: 14,
  fontWeight: "500",
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

  showcaseStack: {
  height: 520,
  marginTop: 8,
  marginBottom: 16,
},

showcaseCard: {
  position: "absolute",
  top: 0,
  bottom: 0,
  borderRadius: 20,
},

cardBack: {
  left: 32,
  right: 0,
  backgroundColor: "#d0d0d0",
},

cardMiddle: {
  left: 16,
  right: 16,
  backgroundColor: "#c8c8c8",
},

cardFront: {
  left: 0,
  right: 32,
  backgroundColor: "#e2e2e2",
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


    // layout for the EDIT button row
    bottomArea: {
    flexDirection: "row",
    justifyContent: "flex-end",  // push button to the right
    marginTop: 16,
    marginBottom: 24,
    },

    // style for the EDIT button
    navButton: {
    paddingHorizontal: 74,       // fixed width from padding
    height: 52,
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
