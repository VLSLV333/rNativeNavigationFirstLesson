import { View, Text, StyleSheet } from "react-native";

export default function List({ steps }) {
  return steps.map((step) => (
    <View key={step} style={styles.listItem}>
      <Text style={styles.itemText}>{step}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  }
});
