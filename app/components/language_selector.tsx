// components/language_selector.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LANGUAGES = [
  { code: "si", label: "සිංහල" },
  { code: "ta", label: "தமிழ்" },
  { code: "en", label: "English" },
];

type Props = {
  value: string;                     // current language code
  onChange: (code: string) => void;  // callback when user selects
};

export default function LanguageSelector({ value, onChange }: Props) {
  const [open, setOpen] = React.useState(false);

  const selected =
    LANGUAGES.find(l => l.code === value) ?? LANGUAGES[2]; // default English

  function handleSelect(code: string) {
    setOpen(false);
    onChange(code);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => setOpen(prev => !prev)}
      >
        <Text style={styles.buttonText}>{selected.label}</Text>
        <Text style={styles.caret}>▾</Text>
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          {LANGUAGES.map(lang => (
            <TouchableOpacity
              key={lang.code}
              style={styles.item}
              activeOpacity={0.8}
              onPress={() => handleSelect(lang.code)}
            >
              <Text style={styles.itemText}>{lang.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 20,
    elevation: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#b0b0b0",
    backgroundColor: "#f5f5f5",
  },
  buttonText: {
    fontSize: 14,
    marginRight: 4,
  },
  caret: {
    fontSize: 12,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#b0b0b0",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 14,
  },
});