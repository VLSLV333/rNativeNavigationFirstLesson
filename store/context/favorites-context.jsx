import { createContext, useState } from "react";

export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealsId, setFavoriteMealsId] = useState(['']);

  function addFavorite(id) {
    setFavoriteMealsId((prevState) => [...prevState, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealsId((prevState) =>
      prevState.filter((itemId) => itemId !== id)
    );
  }

  const value = {
    ids: favoriteMealsId,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContextProvider;
