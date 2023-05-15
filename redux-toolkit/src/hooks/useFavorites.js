import React from "react";

export const useFavorites = () => {
  const { favorites } = useSelector((state) => state);
  return { favorites };
};
