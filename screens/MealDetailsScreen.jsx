import { useLayoutEffect } from "react";

import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import MealDetails from "../components/MealDetails";

import List from "../components/MealDetail/List";

import Subtitle from "../components/MealDetail/Subtitle";

import FavoriteIconButton from "../components/FavoriteIconButton";

import { MEALS } from "../data/dummy-data";

export default function MealDetailsScreen({ route, navigation }) {
  const { itemId, itemTitle } = route.params;

  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = MEALS.find((item) => item.id === itemId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: itemTitle,
      headerRight: () => <FavoriteIconButton color="white" />,
    });
  }, [navigation, itemTitle]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        textStyle={{ color: "white" }}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List steps={ingredients} />
        <Subtitle>Steps</Subtitle>
        <List steps={steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  listContainer: {
    maxWidth: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
