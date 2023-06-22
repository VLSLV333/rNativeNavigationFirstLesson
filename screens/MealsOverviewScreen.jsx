import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealList from "../components/MealList/MealList";

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

  return <MealList items={displayMeals} />;
}
