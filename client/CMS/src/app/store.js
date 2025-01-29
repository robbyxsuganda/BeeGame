// disini kita akan membuat storenya dan memasang reducer dari slice yang kita buat
import { configureStore } from "@reduxjs/toolkit";
import games from "../features/games/games-slice";
import categories from "../features/categories/categories-slice";

export default configureStore({
  reducer: {
    gamesReducer: games,
    categoriesReducer: categories,
  },
});
