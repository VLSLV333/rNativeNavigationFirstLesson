import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

//  maybe should be changed lesson 92 8:12

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() => navigation.navigate("Meals Overview", {
          categoryId: item.id,
          // title: item.title,
        })}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
