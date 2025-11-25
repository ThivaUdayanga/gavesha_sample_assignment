// app/showcase.tsx
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"

const { width } = Dimensions.get("window")
const H_PADDING = 24
const CARD_WIDTH = width - H_PADDING * 2

export default function Showcase() {
  const router = useRouter()

  function handlePrevious() {
    router.push("./observation_details")
  }

  function handleFinish() {
    router.push("./finish")
  }

  const cards = [1, 2, 3] // placeholder for your real data / images

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        <View style={styles.body}>
          {/* Top language selector */}
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.languageButton} activeOpacity={0.8}>
              <Text style={styles.languageText}>English</Text>
              <Text style={styles.languageCaret}>▾</Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text style={styles.title}>Showcase</Text>

          {/* Horizontal carousel */}
          <View style={styles.carouselWrapper}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.carouselContent}
            >
              {cards.map((item, index) => (
                <View key={index} style={styles.card}>
                  {/* Put your image / content here */}
                </View>
              ))}
            </ScrollView>
          </View>

          {/* Label chips */}
          <View style={styles.chipsRow}>
            {["Label", "Label", "Label", "Label", "Label"].map(
              (label, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.chip}
                  activeOpacity={0.8}
                >
                  <Text style={styles.chipText}>{label}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>

        {/* Bottom PREVIOUS / FINISH buttons */}
        <View style={styles.bottomArea}>
          <TouchableOpacity
            style={styles.navButton}
            activeOpacity={0.8}
            onPress={handlePrevious}
          >
            <Text style={styles.navButtonText}>PREVIOUS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            activeOpacity={0.8}
            onPress={handleFinish}
          >
            <Text style={styles.navButtonText}>FINISH</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
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
    paddingBottom: 24,
  },
  body: {
    flex: 1,
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
    marginBottom: 16,
    fontSize: 18,
    fontWeight: "500",
  },
  carouselWrapper: {
    height: 280, // adjust to match your design
  },
  carouselContent: {
    alignItems: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#d0d0d0",
    marginRight: 16,
  },
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "#f4e5ff",
  },
  chipText: {
    fontSize: 12,
  },
  bottomArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
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
})
