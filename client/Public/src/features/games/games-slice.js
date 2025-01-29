import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  games: [],
  loading: false,
  error: "",
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    fetchPending(state) {
      state.loading = true;
      state.games = [];
      state.error = "";
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.games = action.payload;
      state.error = "";
    },
    fetchReject(state, action) {
      state.loading = false;
      state.games = [];
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchPending, fetchSuccess, fetchReject } = gamesSlice.actions;

export const fetchAsync = () => async (dispatch) => {
  try {
    dispatch(fetchPending());

    const { data } = await axios({
      method: "GET",
      url: "http://localhost:3000/pub",
    });

    // console.log("Data dari API:", data);
    dispatch(fetchSuccess(data.games));
  } catch (error) {
    // console.error("Error fetching games:", error);
    dispatch(fetchReject(error.message));
  }
};

export default gamesSlice.reducer;
