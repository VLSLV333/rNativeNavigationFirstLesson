import { View, StyleSheet, FlatList } from "react-native";

import MealItem from "./MealItem";

export default function MealList({ items }) {
  function renderMealItem({ item }) {
    const mealItemProp = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    };

    return (
      <MealItem
        {...mealItemProp}
        // onPress={() =>
        //   navigation.navigate("MealDetails", {
        //     itemId: item.id,
        //     itemTitle: item.title,
        //   })
        // }
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
