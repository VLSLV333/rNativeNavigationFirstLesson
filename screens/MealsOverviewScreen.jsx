import { useLayoutEffect } from "react";

import { View, StyleSheet, FlatList } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((item) =>
    item.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

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
        data={displayMeals}
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
