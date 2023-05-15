import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./RecipeItem.module.css";
import { actions } from "../../store/favorites/favorites.slice";

const ReccipeItem = ({ recipe }) => {
  const favorites = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const isExists = favorites.some((r) => r.id === recipe.id);

  return (
    <div className={styles.item}>
      <h3>{recipe.name}</h3>
      <button onClick={() => dispatch(actions.toggleFavotits(recipe))}>
        {isExists ? "Remove from" : "Add to"} favorites
      </button>
    </div>
  );
};

export default ReccipeItem;
