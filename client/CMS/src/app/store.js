// disini kita akan membuat storenya dan memasang reducer dari slice yang kita buat
import { configureStore } from "@reduxjs/toolkit";
import games from "../features/games/games-slice";
import forms from "../features/forms/forms-slice";

export default configureStore({
  reducer: {
    gamesReducer: games,
    formsReducer: forms,
  },
});
