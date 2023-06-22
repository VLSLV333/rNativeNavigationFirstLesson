// import { useContext } from "react";

import { Text, View, StyleSheet } from "react-native";

// import { FavoriteContext } from "../store/context/favorites-context";

import MealList from "../components/MealList/MealList";

import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
  // const { ids } = useContext(FavoriteContext);

  const ids = useSelector((state) => state.favoriteSlice.ids);

  const favoriteMeals = MEALS.filter((item) => ids.includes(item.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Try adding your first favorite by tapping star icon above dish
          recipe:)
        </Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
