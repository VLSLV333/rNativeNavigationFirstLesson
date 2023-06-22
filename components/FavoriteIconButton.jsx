// import { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Pressable, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { addFavorite, removeFavorite } from "../store/redux/favoriteSlice";

// import { FavoriteContext } from "../store/context/favorites-context";

export default function FavoriteIconButton({ color, id }) {
  // const { ids, addFavorite, removeFavorite } = useContext(FavoriteContext);

  const dispatch = useDispatch();
  const favoriteIdsArray = useSelector((state) => state.favoriteSlice.ids);

  const isFavoriteMeal = favoriteIdsArray.includes(id);

  // console.log(favoriteIdsArray);

  // const InFavorite = ids.includes(id);

  const starHandler = (itemId) => {
    // if (InFavorite) {
    //   removeFavorite(itemId);
    // } else {
    //   addFavorite(itemId);
    // }

    if (isFavoriteMeal) {
      // dispatch(removeFavorite({ idIt: id }));
      dispatch(removeFavorite(id));
    } else {
      // dispatch(addFavorite({ idIt: id }));
      dispatch(addFavorite(id));
    }
  };

  return (
    <Pressable onPress={() => starHandler(id)}>
      {/* <AntDesign name={InFavorite ? "star" : "staro"} size={30} color={color} /> */}
      <AntDesign
        name={isFavoriteMeal ? "star" : "staro"}
        size={30}
        color={color}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
