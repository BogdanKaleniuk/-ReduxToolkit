import { useState } from "react";
import React from "react";
// import "./App.css";
import RecipeItem from "./RecipeItem/RecipeItem.jsx";
import Header from "./header/Header.jsx";

function App() {
  return (
    <section>
      <Header />
      <div>
        <RecipeItem
          recipe={{
            id: 1,
            name: "Lazania",
          }}
        />
        <RecipeItem
          recipe={{
            id: 2,
            name: "Pasta",
          }}
        />
        <RecipeItem
          recipe={{
            id: 3,
            name: "Huyasta",
          }}
        />
      </div>
    </section>
  );
}

export default App;
