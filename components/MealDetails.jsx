import { Text, View, StyleSheet } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  textStyle,
  style
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration} m</Text>
      <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    // textAlign: 'center'
  },
});
