import { useState } from "react";

import { Pressable, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function FavoriteIconButton({ color }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <>
      {!favorite && (
        <Pressable onPress={() => setFavorite(true)}>
          <AntDesign name={"staro"} size={30} color={color} />
        </Pressable>
      )}
      {favorite && (
        <Pressable onPress={() => setFavorite(false)}>
          <AntDesign name={"star"} size={30} color={color} />
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({});
