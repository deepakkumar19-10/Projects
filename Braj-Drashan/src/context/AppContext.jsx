import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Favorites storage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("divyabraj_favorites");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Drawer state for favorites & planner modals
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("divyabraj_favorites", JSON.stringify(favorites));
    } catch (e) {
      console.error("Failed to save favorites", e);
    }
  }, [favorites]);

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const exists = prev.some((f) => f.id === item.id && f.type === item.type);
      if (exists) {
        return prev.filter((f) => !(f.id === item.id && f.type === item.type));
      } else {
        return [...prev, item];
      }
    });
  };

  const isFavorite = (id, type = "temple") => {
    return favorites.some((f) => f.id === id && f.type === type);
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        isFavoritesOpen,
        setIsFavoritesOpen,
        isPlannerOpen,
        setIsPlannerOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
