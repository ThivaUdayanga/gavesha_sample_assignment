// app/observation_details.tsx
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useRouter } from "expo-router"

export default function ObservationDetails() {
  const router = useRouter()

  function handlePrevious() {
    router.push("./add_image_three")
  }

  function handleNext() {
    router.push("./showcase")
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        {/* main block so buttons stay at the bottom */}
        <View style={styles.body}>
          {/* Top language selector */}
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.languageButton} activeOpacity={0.8}>
              <Text style={styles.languageText}>English</Text>
              <Text style={styles.languageCaret}>▾</Text>
            </TouchableOpacity>
          </View>

          {/* Title */}
          <Text style={styles.title}>Observation Details</Text>

          {/* Input fields */}
          <View style={styles.fields}>
            <TextInput
              style={styles.input}
              placeholder="Observed Location"
              placeholderTextColor="#555555"
            />

            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Description"
              placeholderTextColor="#555555"
              multiline
              textAlignVertical="top"
            />

            <TextInput
              style={styles.input}
              placeholder="Observed Date"
              placeholderTextColor="#555555"
            />
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

        {/* Bottom PREVIOUS / NEXT buttons */}
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
            onPress={handleNext}
          >
            <Text style={styles.navButtonText}>NEXT</Text>
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
  fields: {
    gap: 12,
  },
  input: {
    backgroundColor: "#eee4f2",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#d0c4dd",
    fontSize: 14,
  },
  descriptionInput: {
    height: 120,
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
